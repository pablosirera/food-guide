module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myThemeDark: {
          primary: '#1c63ff',
          secondary: '#7c7adb',
          accent: '#c6a201',
          neutral: '#1D222A',
          'base-100': '#3D3F48',
          'base-200': '#313238',
          info: '#5B8FDC',
          success: '#05ffc9',
          // success: '#115F4E',
          warning: '#FAA94C',
          error: '#E87D82',
        },
        myThemeLight: {
          primary: '#fce4ab',
          secondary: '#6db7ce',
          accent: '#bae06d',
          neutral: '#1F1B2C',
          'base-100': '#FAF9FB',
          'base-200': '#faf7f5',
          info: '#8FCFEA',
          success: '#128159',
          warning: '#D57515',
          error: '#F95D5D',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
}
