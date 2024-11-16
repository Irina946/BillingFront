import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    federation({
      name: "components",
      filename: "remoteEntry.js",
      exposes: {
        "./Input": "src/components/input/input.tsx",
        "./ButtonBig": "src/components/button/buttonBig.tsx",
        "./ButtonBigRed": "src/components/button/buttonBigRed.tsx",
        "./ButtonEmptyRed": "src/components/button/buttonEmptyRed.tsx",
        "./ButtonEmptyViolet": "src/components/button/buttonEmptyViolet.tsx",
        "./ButtonViolet": "src/components/button/buttonViolet.tsx",
        "./ButtonExit": "src/components/button/buttonExit.tsx",
        "./Logo": "src/components/logo/logo.tsx",
        "./CardBalance": "src/components/card/cardBalance.tsx",
        "./InputModal": "src/components/input/inputModal.tsx",
        "./InputSearch": "src/components/input/inputSearch.tsx",
        "./CardServicesCategory": "src/components/card/cardServicesCategory.tsx",
        "./CardTariffs": "src/components/card/cardTariffs.tsx",
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
