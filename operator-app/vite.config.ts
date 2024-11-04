import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "operator-app",
      remotes: {
        components: "http://localhost:4173/assets/remoteEntry.js"
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
