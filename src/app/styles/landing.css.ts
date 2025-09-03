import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const hero = style({
  textAlign: "center",
  padding: "6rem 1.5rem",
  background: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.heading,
});

export const button = style({
  padding: "0.75rem 1.5rem",
  margin: "0.5rem",
  borderRadius: "9999px",
  fontWeight: 500,
  background: vars.color.primary,
  color: "#fff",
  border: "none",
  cursor: "pointer",
  selectors: {
    "&:hover": { opacity: 0.9 },
  },
});

export const card = style({
  background: vars.color.card,
  padding: "1.5rem",
  borderRadius: "1rem",
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  color: vars.color.text,
});
