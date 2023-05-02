/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3e5ab7',

          secondary: '#a5b22e',

          accent: '#92ed71',

          neutral: '#212A31',

          'base-100': '#FFFFFF',

          info: '#6D8BDF',

          success: '#4FDE88',

          warning: '#EEBB44',

          error: '#EA847B',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
