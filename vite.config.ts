import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  resolve: {
=======
  base: './',
  build: { outDir: 'dist',
    assetsDir: 'assets'},
   resolve: {
>>>>>>> 11fed4a5715c8342169ef80e1b3291dc31ffeb65
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
