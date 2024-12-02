import { JobActivity } from "@/components/job-activity/JobActivity";
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
       sidenav:'#1A3D7C',
       btn:'#2F74FA1A',
       background:'#F5F5F5',
       completed:'#28A745',      
       progress:'#FFC107',    
       notBid:'#6C757D',    
       bidding:'#007BFF',
       customGray:'#ADADAD',
       customSilver:'#F3F4F6',
       filterText:'#9CA3AF',
       jobFilter:'#E0E0E0',
       jobFilterText:'#878787',
       customRed:'#FB3B52',
       redBg:'#FF9F9D',
       JobActivity:'#9291A5',
       darkGray:'#333333',
       tableData:'#1B2128'

       
      },
      fontFamily: {
        roboto: ["Roboto"], 
        poppins:["Poppins"],
        montserrat:["Montserrat"]
      },
      fontSize: {
        xs:'12px',
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
