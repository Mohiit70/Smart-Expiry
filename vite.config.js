import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Remove the additionalData if it's causing issues
        includePaths: ['src/styles']
      }
    }
  }
})