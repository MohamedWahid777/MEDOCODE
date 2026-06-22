import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    // Temporary — for diagnosing Chrome Performance panel / PageSpeed
    // "unattributed" time by mapping minified code back to real source.
    // Turn this back to false once diagnosis is done; source maps add
    // extra files to the build output and slightly increase build time,
    // with no effect on the site's actual runtime behavior or appearance.
    sourcemap: true,
  },
})