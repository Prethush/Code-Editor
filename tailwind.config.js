module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        50: "0 1 47%",
        100: "0 1 100%"
      },
      colors: {
        custom: "rgb(38,50,56)"
      },
      width: {
        small: "45vw",
        big: "90vw"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
