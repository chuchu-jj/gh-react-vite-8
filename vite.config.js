import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'ptpps://chuchu-jj.github.io/gh-react-vite-8/',
  plugins: [react()],
})
