/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["Inter", "sans"],
      "serif": ["Inter", "sans-serif"],
    }
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: ["forest"],
  },
}

