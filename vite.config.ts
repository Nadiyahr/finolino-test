import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/finolino-test/',
  plugins: [vue({
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 3
        }
      }
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  optimizeDeps: { exclude: ["swiper/vue", "swiper/types"], },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/utils/_vars.scss";`
      }
    }
  }
})
