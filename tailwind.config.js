/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-5' : '-5'
      },
    },
    colors:{
      "primary":"#ff8f9c",
      "text":"#858585",
      'border': '#b3b3b352',
      
    },
  },
  plugins: [],
}