import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/_genericComponent/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://aswin-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aswin Lakshmanan — Senior Software Engineer",
    template: "%s · Aswin Lakshmanan",
  },
  description:
    "Senior Software Engineer with 6+ years building scalable full-stack web applications across MEAN, MERN, Python, and PHP.",
  keywords: [
    "Aswin Lakshmanan",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Aswin Lakshmanan" }],
  creator: "Aswin Lakshmanan",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Aswin Lakshmanan — Senior Software Engineer",
    description: "Portfolio of Aswin Lakshmanan.",
    siteName: "Aswin Lakshmanan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aswin Lakshmanan — Senior Software Engineer",
    description: "Portfolio of Aswin Lakshmanan.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream text-ink font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
