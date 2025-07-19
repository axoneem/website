'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import vertexShader from '../shaders/vertex.vert';
import fragmentShader from '../shaders/fragment.frag';
import splashStyles from '@/styles/components/Splash.module.scss';
import clsx from 'clsx';

export function Splash({ className }: { className?: string }) {
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
    if (!containerRef.current) {
      return;
    }

    const container = containerRef.current;

    // Always use full viewport dimensions to avoid sizing issues
    const width = window.innerWidth;
    const height = window.innerHeight;

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
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;

    // Background gradient sphere material
    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    });

    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const backgroundSphere = new THREE.Mesh(geometry, material);
    scene.add(backgroundSphere);

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

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

    // Resize handler - always use full viewport
    const handleResize = () => {
      if (!sceneRef.current.camera || !sceneRef.current.renderer || !sceneRef.current.composer) return;
      
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
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

    // Splash loop
    const animate = () => {
      if (!sceneRef.current.isPlaying) {
        return;
      }
      
      sceneRef.current.time = (sceneRef.current.time || 0) + 0.005;
      
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
      className={clsx(splashStyles.root, className)}
      style={{
        margin: 0,
        padding: 0,
        display: 'block'
      }} 
    />
  );
}
