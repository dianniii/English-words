import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/English-words/',
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://itgirlschool.justmakeit.ru',
        changeOrigin: true
      }
    }
  }
});

