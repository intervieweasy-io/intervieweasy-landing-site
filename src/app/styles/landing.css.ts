// src/app/styles/landing.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const pageWrap = style({
  minHeight: '100svh',
  display: 'flex',
  flexDirection: 'column',
});

export const nav = style({
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: vars.size.max,
  width: '100%',
  margin: '0 auto',
  padding: `0 ${vars.space[6]}`,
  color: vars.color.textMuted,
});

export const brand = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontWeight: 600,
  letterSpacing: 0.2,
});

export const brandIcon = style({
  width: 28,
  height: 28,
  display: 'grid',
  placeItems: 'center',
  font : '20px',
  borderRadius: 10,
  background:
    'radial-gradient(80% 80% at 30% 20%, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 100%), linear-gradient(135deg, #b86cff, #ff4fd8)',
  boxShadow: '0 6px 20px rgba(184,108,255,0.35)',
});

export const main = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.space[12]} ${vars.space[6]}`,
});

export const container = style({
  width: '100%',
  maxWidth: vars.size.container,
  margin: '0 auto',
  textAlign: 'center',
});

export const heroBadge = style({
  margin: '0 auto',
  width: 56,
  height: 56,
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  background:
    'radial-gradient(80% 80% at 30% 20%, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 100%), linear-gradient(135deg, #b86cff, #ff4fd8)',
  boxShadow: '0 10px 40px rgba(184,108,255,0.40)',
});

export const title = style({
  marginTop: vars.space[6],
  fontFamily: vars.font.heading,
  fontWeight: 800,
  fontSize: '64px',
  lineHeight: 1.05,
  letterSpacing: -0.8,
});

export const crackGradient = style({
  background: 'linear-gradient(90deg, #b86cff 0%, #ff4fd8 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
});

export const subtitle = style({
  margin: `${vars.space[4]} auto 0`,
  maxWidth: 720,
  color: vars.color.textMuted,
  fontSize: 18,
  lineHeight: 1.6,
});

export const ctas = style({
  display: 'flex',
  gap: 12,
  marginTop: vars.space[8],
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const primaryBtn = style({
  border: 0,
  cursor: 'pointer',
  padding: '14px 22px',
  borderRadius: vars.radius.pill,
  fontWeight: 700,
  fontSize: 15,
  background: 'linear-gradient(90deg, #b86cff, #ff4fd8)',
  color: '#0b0f1d',
  boxShadow: '0 10px 30px rgba(184,108,255,0.45)',
  selectors: {
    '&:focus-visible': { outline: `3px solid ${vars.color.ring}` },
  },
});

export const secondaryBtn = style({
  border: `1px solid ${vars.color.cardBorder}`,
  background: 'transparent',
  color: vars.color.text,
  cursor: 'pointer',
  padding: '14px 18px',
  borderRadius: vars.radius.pill,
  fontWeight: 600,
  fontSize: 15,
  selectors: {
    '&:hover': { background: 'rgba(255,255,255,0.03)' },
    '&:focus-visible': { outline: `3px solid ${vars.color.ring}` },
  },
});

export const features = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 18,
  marginTop: vars.space[12],
  '@media': { '(max-width: 900px)': { gridTemplateColumns: '1fr', gap: 12 } },
});

export const card = style({
  borderRadius: vars.radius.lg,
  padding: 22,
  background: vars.color.surface,
  border: `1px solid ${vars.color.cardBorder}`,
  textAlign: 'left',
});

export const cardIcon = style({
  width: 44,
  height: 44,
  borderRadius: 12,
  display: 'grid',
  placeItems: 'center',
  background:
    'radial-gradient(80% 80% at 30% 20%, rgba(255,255,255,.16) 0%, rgba(255,255,255,0) 100%), linear-gradient(135deg, #1d253f, #2a3255)',
  marginBottom: 12,
});

export const cardTitle = style({
  fontWeight: 700,
  fontSize: 16,
  marginBottom: 6,
});

export const cardText = style({
  color: vars.color.textMuted,
  fontSize: 14,
  lineHeight: 1.6,
});

export const footer = style({
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.textMuted,
  borderTop: `1px solid ${vars.color.cardBorder}`,
});
