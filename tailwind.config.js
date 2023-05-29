/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        common: "url('/assets/CommonBG.svg')",
        contact: "url('/assets/contact2.svg')",
        loginBG: "url('/assets/LoginBG.svg')",
       
      },
      colors: {
        primary: 'rgba(8, 63, 70, 1)',
        secondary: '#0bcc3b',
      },
      fontFamily: {
        FutuLight: 'FutuLight',
        Futura: ['Futura Md BT'],

      },
    },
  },
  plugins: [],
};
