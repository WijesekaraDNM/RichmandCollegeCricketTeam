/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        baseBlue:'#00175F',
        baseBlue2:'#002488',
        baseRed1:'#802F3B',
        baseRed2:'#823944'
      },
      backgroundImage: {
        'Background': "url('./src/assets/images/wallback.png')",
      },      
    }
  },
  plugins: [],
}

