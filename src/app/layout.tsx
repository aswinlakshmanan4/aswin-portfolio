import type { Metadata } from "next";
import { Inter, Instrument_Serif, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "./components/_genericComponent/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const AuroraBackground = dynamic(
  () => import("./components/_genericComponent/AuroraBackground"),
  { ssr: false }
);

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
        className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased bg-bg text-white font-sans`}
      >
        <AuroraBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
