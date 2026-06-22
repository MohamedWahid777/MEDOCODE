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
    sourcemap: false,
    modulePreload: {
      resolveDependencies: (filename, deps) => {
        // Prevent Vite from eagerly injecting `<link rel="modulepreload">` for Spline.
        // If preloaded, the browser downloads the 4.5MB chunk immediately on mobile,
        // completely destroying FCP/LCP before the React component even runs.
        return deps.filter(dep => !dep.includes('spline'));
      },
    },
    rollupOptions: {
      // Let Vite handle chunking automatically based on React.lazy()
    },
  },
})