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
        loginBG: "url('/assets/LoginBG.svg')",
        common: "url('/assets/CommonBG.svg')"
      },
      colors: {
        primary: 'rgba(8, 63, 70, 1)',
        secondary: '#0bcc3b'
      },
      fontFamily: {
        Futura: ['Futura Md BT']
      },
    },
  },
  plugins: [],
};
