/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        aexdo: "#eb6547",
        "base-100": "#fff",
        "base-200": "#ddd",
        "base-300": "#bbb",
        "base-900": "#444",
        "base-900-content": "#eee",
        "aexdo-content": "#eee",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
