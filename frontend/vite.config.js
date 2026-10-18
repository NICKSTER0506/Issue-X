import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/analyze': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
      },
      '/samples': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
      },
      '/health': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
      },
      '/execute': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
      }
    }
  }
})
