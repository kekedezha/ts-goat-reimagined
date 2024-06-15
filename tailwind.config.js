/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '768px',
      // => @media (min-width: 768px)
      // 768 <= screen size < 1023 
      'mobileLarge': '425px',
      // => @media (min-width: 425) 
      // 425 <= screen size < 767
      'mobileMed': '375px',
      // => @media (min-width: 375)
      // 375 <= screen size < 424
    },
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["dark"]
  }
}

