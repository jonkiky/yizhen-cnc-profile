module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      maxHeight: {
        '128': '32rem',
      }
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
