/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobileSm': '320px',
      // => @media (min-width: 320)

      'mobileMed': '375px',
      // => @media (min-width: 375)
      
      'mobileLarge': '425px',
      // => @media (min-width: 425) 

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px)

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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

