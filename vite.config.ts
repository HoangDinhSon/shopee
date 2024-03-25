import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  //  khi không có thì devSourceMap thì tren dev tool của trình duyệt không cho biết cái css nằm o file nào , nó chỉ hiện style check vite document
  // vite> config>Shared Options> devSourcemap
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
})
