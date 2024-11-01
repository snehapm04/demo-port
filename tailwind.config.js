module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0B0C10',          // Dark Background Color
        slate: '#1F2833',         // Slate Background Color
        lightGray: '#C5C6C7',     // Light Gray Text Color
        cyan: '#66FCF1',          // Cyan Color
        teal: '#45A29E',          // Teal Color
        hoverSlate: '#1F1F1F',    // Slightly Darker Slate for hover
        hoverCyan: '#54FFD6',     // Lighter Cyan for hover
      },
    },
  },
  plugins: [],
};
