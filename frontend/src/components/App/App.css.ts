import { style } from "@vanilla-extract/css";

export const app = style({
  height: "100vh",
  textAlign: "center",
});

export const logo = style({
  display: "block",
  width: "50%",
  height: "50%",
  margin: "auto",
  padding: "10% 0 0",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundOrigin: "content-box",
});

export const result = style({
  height: "20px",
  lineHeight: "20px",
  margin: "1.5rem auto",
});

export const btn = style({
  width: "60px",
  height: "30px",
  lineHeight: "30px",
  borderRadius: "3px",
  border: "none",
  margin: "0 0 0 20px",
  padding: "0 8px",
  cursor: "pointer",
  ":hover": {
    backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    color: "#333",
  },
});

export const input = style({
  border: "none",
  borderRadius: "3px",
  outline: "none",
  height: "30px",
  lineHeight: "30px",
  padding: "0 10px",
  backgroundColor: "rgba(240, 240, 240, 1)",
  WebkitFontSmoothing: "antialiased",
  ":hover": {
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  ":focus": {
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});
