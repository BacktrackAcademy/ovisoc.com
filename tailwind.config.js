module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./src/**/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        critical: "#ff1343",
        dark: "#070916",
        high: "#ff7e4c",
        medium: "#fec300",
        low: "#15cd90",
        console: "#0F79ED",
        "bta-blue": "#1A1F61",
        "bta-pink": "#EC1075",
        "bta-gray": "#565982",
        "bta-filter": "#bfbfbfde",
        "bta-black": "#070916",
        "total-back": "#181929",
        "blue-light-dark": "#1F1E3C",
        "blue-light": "#06F1E2",
        "blue-text": "#5652CC",
        "principal-purple":"#807DFA",
      },
      fill:{
        shield: "#050611"
      },
      fontFamily: {
        "ibm": [" IBM Plex Mono", "monospace"],
        "roboto": ['Roboto', "sans-serif"]
      },
      listStyleType: {
        roman: "lower-roman"
      },
      height: {
        "122": "28rem",
        "138": "32rem",
        "154": "40rem",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "top-hero": "calc(100vh - 6rem)",
        "top-hero-mobile": "calc(100vh - 4rem)",
      },
      spacing: {
        "over-screen": "100vh",
      },
      screens: {
        'mobile': '425px'
      },
      keyframes:{
        test: {
          '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
        }
      },
      animation:{
        test: "test 1s ease-in-out infinite"
      },
    },
    fontFamily: {
      inconsalata: ["Inconsolata", "monospace"],
      oswald: ["Oswald", "sans-serif"]
    },
    fontSize: {
      xss: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
      "10xl": "8rem",
      "11xl": "9rem",
      "12xl": "10rem"
    },
  },
  variants: {
    extend: {
      fill: ['hover'],
      width: ["hover", "group-hover"],
      scale: ["hover","group-hover"],
      animation: ["hover", "group-hover"]
    }
  },
  plugins: []
};