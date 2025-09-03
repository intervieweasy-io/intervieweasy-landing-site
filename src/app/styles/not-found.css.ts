import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const wrapper = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space[6],
});

export const title = style({
  fontSize: 32,
  fontWeight: 700,
});

export const subtitle = style({
  color: vars.color.textMuted,
  maxWidth: 400,
  textAlign: 'center',
});