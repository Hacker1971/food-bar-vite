/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#eae241",
          
 "secondary": "#71f28f",
          
 "accent": "#e928ed",
          
 "neutral": "#1B192E",
          
 "base-100": "#DFEAF1",
          
 "info": "#4CA4EB",
          
 "success": "#29B392",
          
 "warning": "#F6BB09",
          
 "error": "#F7365D",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}