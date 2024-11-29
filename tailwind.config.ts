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
      fontFamily: {
        roboto: ["Roboto"], 
        poppins:["Poppins"],
        montserrat:["Montserrat"]
      },
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '30px',
        '3xl': '36px',
        '4xl': '48px',
      },
    },
  },
  plugins: [],
} satisfies Config;
