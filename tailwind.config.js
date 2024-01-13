/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    colors: {
      light: '#ffffff',
      dark: '#111111',
      primary: '#EBF3F3',
      secondary: '#F6FCFF',
      teal: '#357E8D',
      warn: '#ff0000',
      green: '#00866a',
      transparent: '#ffffff00',
    },
  },
  plugins: [],
};
