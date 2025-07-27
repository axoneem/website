import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    turbopack: {
      rules: {
        '*.vert': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
        '*.frag': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
        '*.glsl': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
      },
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(vert|frag|glsl)$/,
        type: 'asset/source',
      });
      return config;
    },
};

export default nextConfig;
