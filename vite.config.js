import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { Component } from 'react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      host: true,
      proxy: {
        '/terminology-fhir': {
          target: env.VITE_TERMINOLOGY_FHIR_IP,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/terminology-fhir/, '/fhir'),
        },
        '/terminology-snomed': {
          target: env.VITE_TERMINOLOGY_SNOMED_IP,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/terminology-snomed/, '')
        }
      },
    },
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        assets: '/src/assets',
        components: '/src/components',
        hooks: '/src/hooks',
        layout: '/src/layout',
        pages: '/src/pages',
        services: '/src/services',
        utils: '/src/utils',
      },
    },
  }
});