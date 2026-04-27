import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This line is the secret sauce for GitHub Pages!
  base: '/Your-dream-app/', 
  plugins: [react()],
})
