/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        sidebar: '#2c3e50',
        'sidebar-text': '#ecf0f1',
        'sidebar-link': '#85c1e9',
        'sidebar-link-hover': '#5fa2dd',
        accent: '#5fa2dd'
      }
    }
  },
  plugins: []
};
