import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/English-words/',
  plugins: [react()], 
  server: {
    port: 3000
  },
  build: {
    outDir: 'build'
  }
})
