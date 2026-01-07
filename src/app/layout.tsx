import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marco Masik - Full-Stack Developer & Software Engineer",
  description: "Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. Based in Berlin, creating responsive web applications and e-commerce solutions.",
  keywords: [
    "Marco Masik",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Berlin",
    "Portfolio",
  ],
  authors: [{ name: "Marco Masik", url: "https://marcomasik.com" }],
  creator: "Marco Masik",
  publisher: "Marco Masik",
  metadataBase: new URL("https://marcomasik.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marcomasik.com",
    siteName: "Marco Masik - Portfolio",
    title: "Marco Masik - Full-Stack Developer & Software Engineer",
    description: "Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. Based in Berlin, creating responsive web applications and e-commerce solutions.",
    images: [
      {
        url: "/images/avatar_marco.png",
        width: 1200,
        height: 630,
        alt: "Marco Masik - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Masik - Full-Stack Developer & Software Engineer",
    description: "Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/images/avatar_marco.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marco Masik",
    "url": "https://marcomasik.com",
    "image": "https://marcomasik.com/images/avatar_marco.png",
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "DE"
    },
    "sameAs": [
      "https://linkedin.com/in/marco-masik/",
      "https://github.com/marco-masik"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Web Development",
      "Frontend Development",
      "Full-Stack Development"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={montserrat.variable}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
