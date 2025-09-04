export const lightTheme = {
  color: {
    bg: "#ffffff",
    surface: "#f7f8fc",
    text: "#0b1020",
    textMuted: "#5b6078",
    primary: "#7c3aed",
    primarySoft: "#ec4899",
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
} as const;

export const darkTheme: typeof lightTheme = {
  color: {
    bg: "#0b1020",
    surface: "#0f152b",
    text: "#e7e9f3",
    textMuted: "#a6adcf",
    primary: "#b86cff",
    primarySoft: "#ff4fd8",
    ring: "rgba(186, 108, 255, 0.45)",
    cardBorder: "rgba(255,255,255,0.06)",
  },
  font: lightTheme.font,
  radius: lightTheme.radius,
  space: lightTheme.space,
  size: lightTheme.size,
};

export type Theme = typeof lightTheme;
