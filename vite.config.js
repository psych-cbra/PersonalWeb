import react from '@vitejs/plugin-react';  
import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite"; // Import the Tailwind CSS plugin for Vite
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // This allows you to use '@' as an alias for the 'src' directory
    },
  },
});
