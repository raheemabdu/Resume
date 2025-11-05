/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [],
  corePlugins: {
    preflight: true,
  },
  future: {
    disableColorFunctionWarnings: true,
  },
};