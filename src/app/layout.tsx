// src/app/layout.tsx
import type { Metadata } from 'next';
import { ThemeProvider } from './context/ThemeProvider';

export const metadata: Metadata = {
  title: 'Karyo – Track it. Crack it.',
  description: 'Modern job tracker with smart tracking, referral swaps, and growth analytics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
