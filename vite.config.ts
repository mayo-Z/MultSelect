import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
// import { resolve } from 'path'


// function resovePath(paths: string) {
//   // 如果 __dirname 找不到 需要 yarn add @types/node --save-dev
//   return resolve(__dirname, paths);
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    viteMockServe({
      // default
      mockPath: 'mock',
    }),
  ],
})
