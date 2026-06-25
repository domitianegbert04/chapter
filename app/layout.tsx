import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chapter — Your Reading Life",
  description: "The reading app people wish Goodreads had become. Track books, build streaks, save quotes, discover what to read next.",
  keywords: ["books", "reading", "tracking", "library", "book tracker"],
  openGraph: {
    title: "Chapter — Your Reading Life",
    description: "The reading app people wish Goodreads had become.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0D0D0B] text-[#F5F2EB]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
