import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteTestPlugin from 'vite-plugin-test'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue(),
    ...(
      process.env.NODE_ENV === 'test'
        ? [viteTestPlugin({
          dir: 'tests/unit'
        })]
        : []
    ),
  ]
})
