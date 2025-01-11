import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A226F',
        primary_hover: '#aa2b88',
        secondary: '#000000',
        customGray: '#f3f4f6',
      },
      boxShadow: {
        'custom-xl': '0 8px 12px -3px rgba(153, 79, 133, 0.2), 0 3px 5px -2px rgba(153, 79, 133, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
