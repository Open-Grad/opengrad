/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],

  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["ClashDisplay-Semibold"],
      body: ["Poppins"],
    },
    colors: {
       transparent: 'transparent',
       current: 'currentColor',
      'darkgreen': "#024751",
      'lightgreen': "#D2FEE1",
      'normalgreen': "#00D47E",
      'darkviolet': "#D4C4FC",
      'lightviolet': "#E3D8FE",
    },
  },

  plugins: [require("flowbite/plugin")],
};
