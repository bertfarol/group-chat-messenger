/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "standard": "0 4px 15px  rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
