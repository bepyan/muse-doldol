import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'muse-doldol',
  plugins: [preact()],
  resolve: {
    alias: {
      react: 'preact/compat',
      '~': './src/',
    },
  },
});
