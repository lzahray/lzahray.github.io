import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', 
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: '../', // Build to the root directory for GitHub Pages
    emptyOutDir: false, // Don't empty the root (it has .git, README, etc.)
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
