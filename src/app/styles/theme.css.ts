import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: null,
    text: null,
    primary: null,
    card: null,
  },
  font: {
    body: null,
    heading: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    background: "#ffffff",
    text: "#111111",
    primary: "#ec4899",
    card: "#f9fafb",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
});

export const darkTheme = createTheme(vars, {
  color: {
    background: "#0B0E17",
    text: "#f9fafb",
    primary: "#8b5cf6",
    card: "#111421",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
});
