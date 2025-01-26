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

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creatorclash.com"),
  title: "Creator Clash 3",
  description:
    "Join us for Creator Clash 3 – the ultimate event where creators face off for a good cause. Don't miss out!",
  openGraph: {
    title: "Creator Clash 3",
    description:
      "Experience the thrill of Creator Clash 3 – a battle of creators for a good cause! Get tickets now!",
    url: "https://creatorclash3.com",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Creator Clash 3 Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@creatorclash",
    creator: "@creatorclash",
    title: "Creator Clash 3",
    description:
      "Creator Clash 3 is here! Creators face off in an epic event for charity. Get tickets today!",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://creatorclash.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qpu6bbm.css" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-no-repeat bg-center md:bg-top`}
        style={{
          backgroundImage: `url('/bg.jpg')`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
