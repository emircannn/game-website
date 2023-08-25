/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1336': '1337px',
        '1280': '1281px',
        '1140': '1141px',
        '768': '769px',
        '450': '450px',
      },
      colors : {
        'primary': '#050227',
        'primary-light': '#0b0737',
        'primary-dark': '#09071d',
        'primary-lighter': '#120e47',
        'secondary': '#8585f5',
        'secondary-light': '#b6b6f8',
        'graident': 'rgb(244 63 94) ',
        'graident-dark': '#eb5f5f ',
        'success': '#6DD432 ',
        'button': '#1d1a5b  ',
        'section': '#161550',
        'star': '#FFCC00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ]
}