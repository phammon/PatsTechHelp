import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // For GitHub Pages: if your repo is <user>.github.io → base: '/'
  // If it's a project repo (github.com/<user>/PatsTechHelp) → base: '/PatsTechHelp/'
  base: '/PatsTechHelp/',
})
