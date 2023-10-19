// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import dotenv from 'dotenv';

// Load environment variables from .env
// dotenv.config();
console.log('Environment Variables:', process.env);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
