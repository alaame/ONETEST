import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './'   // IMPORTANT : permet à Vite de charger les fichiers correctement
})
