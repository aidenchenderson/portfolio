import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiden Henderson",
  description: "CS Student & Software Developer",
  
  // base url for all metadata images and pages
  metadataBase: new URL("https://ahenderson.dev"),
  
  // open graph info for sharing
  openGraph: {
    title: "Aiden Henderson",
    description: "CS Student & Software Developer",
    url: "https://ahenderson.dev",
    siteName: "Aiden Henderson's Personal Developer Portfolio",
    images: [
      {
        url: "/OpenGraphImage.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// top level wrapper for the app
export default function RootLayout({children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
