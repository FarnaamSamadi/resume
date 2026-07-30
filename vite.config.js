import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'



export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@css': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      '@imgs': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@cmps': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
  plugins: [UnoCSS(), react()],
})

