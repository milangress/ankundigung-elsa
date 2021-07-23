import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      find: '@/',
      replacement: path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: "build"
  },
  server: {
    host: 'localhost',
    strictPort: true,
    hmr: false
    /*hmr: {
      host: 'localhost',
      port: 3003, //443 Run the websocket server on the SSL port
      https: false,
      protocol: 'ws',
      timeout: 1000000,
    }*/
  }
})
