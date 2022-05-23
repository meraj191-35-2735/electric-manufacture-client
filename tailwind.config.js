module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        electric_theme: {
          primary: "#00D6D6",
          secondary: "#D14D4D",
          accent: "#7900D6",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
      "night",
    ],
  },
  plugins: [require("daisyui")],
};
