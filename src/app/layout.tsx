// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL("https://karyo.app"), // ← your prod URL
  title: "Karyo — Track it. Crack it.",
  description:
    "Karyo is a modern job tracker that helps you land your dream role with smart tracking, analytics, and referral swaps.",
  keywords: [
    "job tracker",
    "job search",
    "referral swap",
    "career tracker",
    "kanban job applications",
    "job application organizer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: { canonical: "https://karyo.app" },
  openGraph: {
    type: "website",
    url: "https://karyo.app",
    title: "Karyo — Track it. Crack it.",
    description:
      "Karyo is a modern job tracker that helps you land your dream role with smart tracking, analytics, and referral swaps.",
    siteName: "Karyo",
    images: [{ url: "/og/karyo-og.png", width: 1200, height: 630, alt: "Karyo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karyo — Track it. Crack it.",
    description:
      "Karyo is a modern job tracker that helps you land your dream role with smart tracking, analytics, and referral swaps.",
    images: ["/og/karyo-og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#7c3aed" }],
  },
  manifest: "/site.webmanifest",
  applicationName: "Karyo",
  category: "productivity",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0b0b" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Karyo",
    url: "https://karyo.app",
    logo: "https://karyo.app/icons/apple-touch-icon.png",
    sameAs: ["https://twitter.com/your_handle"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Karyo Plans",
      itemListElement: [
        { "@type": "Offer", name: "Free" },
        { "@type": "Offer", name: "Pro" },
      ],
    },
  };

  return (
    <html lang="en">
      <head />
      <body className="bg-gray-950 text-gray-100">{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

      </body>
    </html>
  );
}
