/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bluedarkmain: "#030D22",
        blueheader: "#0B082E",
        bluelightsecond: "#0D0936",
        violetSelected: "#1C1347",
        violetinput : "#171539",
        violetborderinput : "#3A3855" ,
        bluedarksecond: "#04112E",
        bluelettercode: "#2171F2",
        violetlettercode: "#FF2E97",
        yellowelettercode: "#FFD400", 
        graylettercode: "#999999",
        pinklettercode: "#FC16BB",
        pinklightlettercode: "#DA70D6",
        skybluelettercode: "#0EF3FF",
        rederrorlettercode: "#AC077A",
        whitelettercode: "#E4EEFF",
        graylettercode: "#B4B4B9",
        pinkactive: "#FF2592",
        pinkinactive: "#611129",
        orangelettercode: "#EE8D25",
        graymenu : "#3C3C3C",
        bluehover: "#073170",
        iconOff: "#581648"
      },
    },
  },
  plugins: [],
};
