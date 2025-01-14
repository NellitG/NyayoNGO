import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/Mpesa-Daraja-Api': {
        target: 'http://localhost:5173', // Backend address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/Mpesa-Daraja-Api/, ''), 
      }
    }
  }
})
