module.exports = {
  content: ["./*/*.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      strongCyan: "hsl(171, 66%, 44%) ",
      lightBlue: "hsl(233, 100%, 69%)",
      darkGrayishBlue: "hsl(210, 10%, 33%)",
      grayishBlue: "hsl(201, 11%, 66%)",
    },
    fontFamily:{
      forAll: ['Bai Jamjuree']
    },
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/images/bg-header-mobile.png')",
        "deskt-hero": "url('/images/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
};
