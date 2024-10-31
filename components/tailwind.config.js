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
      "p-input": "16px"
    },
    extend: {
      width: {
        "325": "325px",
        "300": "300px"
      },
      height: {
        "50": "50px",
        "45": "45px"
      }
    },
    borderRadius: {
      "8": "8px",
      "10": "10px"
    }
  },
  plugins: [],
}

