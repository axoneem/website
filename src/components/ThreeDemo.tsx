'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { DotScreenShader } from './CustomShader';

// Shader for the grainy gradient background
const vertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

const fragmentShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;

// NOISE
float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

float lines(vec2 uv, float offset){
	return smoothstep(
		0., 0.5 + offset*0.5,
		0.5*abs((sin(uv.x*35.) + offset*2.))
	);
}

mat2 rotate2D(float angle){
	return mat2(
		cos(angle),-sin(angle),
		sin(angle),cos(angle)
	);
}

void main()	{
	vec3 baseFirst =  vec3(100./255., 150./255., 255./255.);
	vec3 accent =  vec3(20./255., 20./255., 40./255.);
	vec3 baseSecond =  vec3(180./255., 100./255., 255./255.);
	float n = noise(vPosition + time);

	vec2 baseUV = rotate2D(n) * vPosition.xy * 0.1;
	float basePattern = lines(baseUV, 0.5);
	float secondPattern = lines(baseUV, 0.1);

	vec3 baseColor = mix(baseSecond, baseFirst, basePattern);
	vec3 secondBaseColor = mix(baseColor, accent, secondPattern);

	gl_FragColor = vec4(vec3(secondBaseColor), 1.);
}
`;

export function ThreeDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    composer?: EffectComposer;
    controls?: OrbitControls;
    material?: THREE.ShaderMaterial;
    time?: number;
    isPlaying?: boolean;
  }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.001, 1000);
    camera.position.set(0, 0, 1.3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0xeeeeee, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    
    // Disable zoom controls
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;

    // Background gradient sphere material
    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    });

    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const backgroundSphere = new THREE.Mesh(geometry, material);
    scene.add(backgroundSphere);

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const effect1 = new ShaderPass(DotScreenShader);
    effect1.uniforms['scale'].value = 4;
    composer.addPass(effect1);

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      composer,
      controls,
      material,
      time: 0,
      isPlaying: true
    };

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !sceneRef.current.camera || !sceneRef.current.renderer || !sceneRef.current.composer) return;
      
      const newWidth = containerRef.current.offsetWidth;
      const newHeight = containerRef.current.offsetHeight;
      
      sceneRef.current.camera.aspect = newWidth / newHeight;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(newWidth, newHeight);
      sceneRef.current.composer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for camera movement
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      targetRef.current.x = x * 0.3; // Limit movement range
      targetRef.current.y = y * 0.3;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!sceneRef.current.isPlaying) return;
      
      sceneRef.current.time = (sceneRef.current.time || 0) + 0.001;
      
      // Smooth camera movement with momentum
      const lerp = 0.05; // Lower = more momentum/smoother
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * lerp;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * lerp;
      
      // Update camera position based on mouse
      if (sceneRef.current.camera) {
        sceneRef.current.camera.position.x = mouseRef.current.x;
        sceneRef.current.camera.position.y = mouseRef.current.y;
        sceneRef.current.camera.lookAt(0, 0, 0);
      }
      
      if (sceneRef.current.material) {
        sceneRef.current.material.uniforms.time.value = sceneRef.current.time;
      }
      
      if (sceneRef.current.composer) {
        sceneRef.current.composer.render();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      
      if (sceneRef.current.renderer && container.contains(sceneRef.current.renderer.domElement)) {
        container.removeChild(sceneRef.current.renderer.domElement);
      }
      
      sceneRef.current.isPlaying = false;
      sceneRef.current = {};
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      style={{
        margin: 0,
        padding: 0,
        display: 'block'
      }} 
    />
  );
} 