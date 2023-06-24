/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      kumbhsan: ["Kumbh Sans", "sans-serif"],
    },
    screens: {
      "min-w": { min: "375px" },
      mobile: { min: "375px", max: "768px" },
      tablet: { min: "768px", max: "992px" },
      "max-mobile": { max: "768px" },
      "max-tablet": { max: "992px" },
      "small-desktop": { min: "1024px", max: "1200px" },
      "big-desktop": { min: "1200px" },
      desktop: { max: "1200px" },
      md: { min: "768px" },
    },
    extend: {
      keyframs: {
        slideCartWindow: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "90%": "90%",
    },
  },
  plugins: [],
};
