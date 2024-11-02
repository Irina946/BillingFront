import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "components",
      filename: "remoteEntry.js",
      exposes: {
        "./Input": "src/components/input/input.tsx",
        "./ButtonBig": "src/components/button/buttonBig.tsx",
        "./FormAuthorizationClient": "src/components/form/formAuthorizationClient.tsx"
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
