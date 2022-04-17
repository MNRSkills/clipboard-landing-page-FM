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
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/images/bg-header-mobile.png')",
        "deskt-hero": "url('/images/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
};
