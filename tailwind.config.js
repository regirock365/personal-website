const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear-to-t":
          "linear-gradient(to top, var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%)",
        "gradient-linear-to-b":
          "linear-gradient(to bottom, var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%)",
        "gradient-linear-to-l":
          "linear-gradient(to left, var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%)",
        "gradient-linear-to-r":
          "linear-gradient(to right, var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%)",
      },
      colors: {
        orange: colors.orange,
        amber: colors.amber,
      },
    },
  },
  plugins: [],
};
