module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_54: "#ffffff54" },
        black: {
          900: "#000000",
          "900_54": "#00000054",
          "900_44": "#00000044",
          "900_3d": "#0000003d",
          "900_4f": "#0000004f",
        },
        gray: { 100: "#f3f3ff", 900: "#222222", "900_01": "#0f1117" },
        blue_gray: {
          50: "#eaecf0",
          500: "#667085",
          700: "#2e765e",
          800: "#2e4049",
          900: "#212634",
          "100_54": "#c8cbd954",
        },
        light_blue: { 900: "#00699a", A400: "#00aeff" },
        blue: { 500: "#1da1f2" },
        deep_purple: { A400: "#5925db" },
      },
      boxShadow: { xs: "0px 12px 20px 0px #b8b8b807", sm: "0px 1px 2px 0px #1018280f" },
      fontFamily: { inter: "Inter", lato: "Lato", mulish: "Mulish" },
      textShadow: { ts: "0px 4px 4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
