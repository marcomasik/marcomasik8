import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";

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
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
