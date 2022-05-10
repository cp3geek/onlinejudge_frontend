import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve("./src")
    }
  },
  base: './',
  //添加热更新配置
  server: {
    watch: {
      usePolling: true
    },
    hmr: true,
    port: 3000,
    open: true,
    cors: true,

  }
})
