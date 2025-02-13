import { defineConfig } from 'vite'
import browserSync from 'vite-plugin-browser-sync'

export default defineConfig({
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
        './src/**/*.css',
        './src/**/*.js',
        './**/*.php'
      ],
      notify: false,
      ui: false,
      logLevel: "silent"
    })
  ]
})
