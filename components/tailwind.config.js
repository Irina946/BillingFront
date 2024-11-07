/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "Styreneb-Bold": "StyreneB-Bold",
      "Styreneb-Regular": "StyreneB-Regular",
      "Styreneb-Medium": "StyreneB-Medium",
      "Styreneb-Thin": "StyreneB-Thin"
    },
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "red": "#EE3022",
      "blackGray": "#505759",
      "gray": "#D9D9D6",
      "violet": "#6727CC",
      "blue": "#07E2E2",
      "buttonVioletFocus": "#511FA2",
      "buttonRedFocus": "#D72505"
    },
    fontSize: {
      "xs": "10px",
      "sm": "12px",
      "base": "14px",
      "lg": "16px",
      "xl": "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "32px",
      "5xl": "36px",
      "6xl": "40px"
    },
    padding: {
      "p-input": "16px",
      "8": "8px",
      "22": "22px",
    },
    extend: {
      width: {
        "20": "20px",
        "325": "325px",
        "300": "300px",
        "150": "150px",
        "145": "145px",
        "120": "120px",
        "200": "200px",
        "184": "184px",
      },
      height: {
        "20": "20px",
        "50": "50px",
        "45": "45px",
        "40": "40px",
        "200": "200px",
        "184": "184px"
      },
      inset: {
        "35": "35px",
        "16": "16px"
      }
    },
    borderRadius: {
      "8": "8px",
      "10": "10px",
      "15": "15px",
    }
  },
  plugins: [],
}

