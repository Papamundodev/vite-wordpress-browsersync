import { defineConfig } from 'vite'
import browserSync from 'vite-plugin-browser-sync'

export default defineConfig({
  build: {
    manifest: true,
    assetsDir: '.',
    outDir: `dist`,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: [
        'resources/scripts/main.js',
        'resources/styles/main.css',
      ],
      output: {
        entryFileNames: '[hash].js',
        assetFileNames: '[hash].[ext]',
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    browserSync({
      proxy: 'vite.local',
      port: 3000,
      open: true,
      files: [
        './resources/**/*.css',
        './resources/**/*.js',
        './**/*.php'
      ],
      notify: false,
      ui: false,
      logLevel: "silent"
    })
  ]
})
