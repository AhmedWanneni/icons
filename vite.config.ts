import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),dts({ include: ['lib/index.ts'] })],
  build: {
    rollupOptions: {
         external: ['react', 'react/jsx-runtime'],
    },
    copyPublicDir: false,
     lib: {
          entry: resolve(__dirname, 'lib/index.ts'),
          formats: ['es']
      }
  }
})
