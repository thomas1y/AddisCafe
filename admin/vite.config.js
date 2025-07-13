import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 This is critical for fixing routes in production!
  server: {
    port: 3001,
  },
});
