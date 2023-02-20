import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [solidPlugin(), eslintPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
