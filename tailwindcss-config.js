module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-dark": "#831843",
        "secondary-dark": "#e11d48",
        "primary-light": "#fff1f2",
        "secondary-light": "#fff1f2",
      },
      gridTemplateColumns: {
        "layout-desktop": "16rem 1fr",
      },
      gridTemplateRows: {
        "layout-desktop": "4rem 300px 1fr 4rem",
      },
      screens: {
        xs: "424px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
