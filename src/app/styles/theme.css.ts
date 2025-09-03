// src/app/styles/theme.css.ts
import { createTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    bg: null,
    surface: null,
    text: null,
    textMuted: null,
    primary: null,
    primarySoft: null,
    ring: null,
    cardBorder: null,
  },
  font: {
    body: null,
    heading: null,
    mono: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    pill: null,
  },
  space: {
    1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 8: null, 10: null, 12: null,
  },
  size: {
    container: null,
    max: null,
  }
});

export const theme = createTheme(vars, {
  color: {
    bg: '#0b1020',                 // deep navy
    surface: '#0f152b',            // slightly lighter for cards
    text: '#e7e9f3',
    textMuted: '#a6adcf',
    primary: '#b86cff',            // violet
    primarySoft: '#ff4fd8',        // pink
    ring: 'rgba(186, 108, 255, 0.45)',
    cardBorder: 'rgba(255,255,255,0.06)',
  },
  font: {
    body: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji',
    heading: 'General Sans, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    pill: '999px',
  },
  space: {
    1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px', 8: '32px', 10: '40px', 12: '48px',
  },
  size: {
    container: '1120px',
    max: '1440px',
  }
});

// Global base styles
globalStyle('html, body', {
  backgroundColor: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
});

globalStyle('::selection', {
  background: 'rgba(184,108,255,0.25)'
});


export const lightTheme = createTheme(vars, {
  color: {
    bg: "#ffffff",
    surface: "#f7f8fc",
    text: "#0b1020",
    textMuted: "#5b6078",
    primary: "#7c3aed",      // violet
    primarySoft: "#ec4899",  // pink
    ring: "rgba(124, 58, 237, 0.35)",
    cardBorder: "rgba(0,0,0,0.08)",
  },
  font: {
    body:
      'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    heading:
      'General Sans, Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
    mono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    pill: "999px",
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
  },
  size: {
    container: "1120px",
    max: "1440px",
  },
});

/** Dark theme (your original values) */
export const darkTheme = createTheme(vars, {
  color: {
    bg: "#0b1020",
    surface: "#0f152b",
    text: "#e7e9f3",
    textMuted: "#a6adcf",
    primary: "#b86cff",     // violet
    primarySoft: "#ff4fd8", // pink
    ring: "rgba(186, 108, 255, 0.45)",
    cardBorder: "rgba(255,255,255,0.06)",
  },
  font: {
    body:
      'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    heading:
      'General Sans, Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
    mono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    pill: "999px",
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
  },
  size: {
    container: "1120px",
    max: "1440px",
  },
});

/* Global base styles applied under either theme class */
globalStyle(`.${lightTheme}, .${darkTheme}`, {
  backgroundColor: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
});

/* Selection color */
globalStyle("::selection", {
  background: "rgba(184,108,255,0.25)",
});