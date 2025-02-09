import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "client-app",
      remotes: {
        components: "http://158.160.67.57/assets/remoteEntry.js"
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
