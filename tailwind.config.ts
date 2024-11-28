import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary:'#2F74FA',
       sidenav:'#1A3D7C'
      },
      fontFamily:{
        custom:['Roboto']
        
      }
    },
  },
  plugins: [],
} satisfies Config;
