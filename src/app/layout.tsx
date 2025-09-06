// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { theme } from './styles/theme.css.ts';

export const metadata: Metadata = {
  title: 'Karyo – Track it. Crack it.',
  description: 'Modern job tracker with smart tracking, referral swaps, and growth analytics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={theme}>
      <body>{children}</body>
    </html>
  );
}
