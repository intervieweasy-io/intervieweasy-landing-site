// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Karyo – Track it. Crack it.',
  description: 'Modern job tracker with smart tracking, referral swaps, and growth analytics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-950 text-gray-100">{children}</body>
    </html>
  );
}
