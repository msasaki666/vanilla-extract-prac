import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  padding: 100,
});

globalStyle("root", {
  fontFamily: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 400,
  colorScheme: ["light", "dark"],
  color: "rgba(255, 255, 255, 0.87)",
  backgroundColor: "#242424",
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTextSizeAdjust: "100%",
});

// :root {
//   font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
//   font-size: 16px;
//   line-height: 24px;
//   font-weight: 400;

//   color-scheme: light dark;
//   color: rgba(255, 255, 255, 0.87);
//   background-color: #242424;

//   font-synthesis: none;
//   text-rendering: optimizeLegibility;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-text-size-adjust: 100%;
// }

globalStyle("a", {
  fontWeight: 500,
  color: "#646cff",
  textDecoration: "inherit",
});

globalStyle("a:hover", {
  color: "#535bf2",
});

// a {
//   font-weight: 500;
//   color: #646cff;
//   text-decoration: inherit;
// }
// a:hover {
//   color: #535bf2;
// }

globalStyle("body", {
  margin: 0,
  display: "flex",
  placeItems: "center",
  minWidth: "320px",
  minHeight: "100vh",
});

// body {
//   margin: 0;
//   display: flex;
//   place-items: center;
//   min-width: 320px;
//   min-height: 100vh;
// }

globalStyle("#app", {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
});

// #app {
//   max-width: 1280px;
//   margin: 0 auto;
//   padding: 2rem;
//   text-align: center;
// }

const logo = style({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  ":hover": {
    filter: "drop-shadow(0 0 2em #646cffaa)",
  },
});
const logoVanila = style([
  logo,
  {
    ":hover": {
      filter: "drop-shadow(0 0 2em #3178c6aa)",
    },
  },
]);
// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
// }
// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }
// .logo.vanilla:hover {
//   filter: drop-shadow(0 0 2em #3178c6aa);
// }

export const styles = { logo, logoVanila };
