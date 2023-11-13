/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primer" : "#0f041c" ,
      "hover" : "#bd00ff" ,
      "efrct" : "#3ddeed" ,
      "wahit" : "#ffffff10" ,
      "text" : "#fff" ,
    },boxShadow: {
      '3xl': '0 0px 6px 1px rgba(0, 0, 0, 0.3)',
    }
  },

  plugins: [],
}