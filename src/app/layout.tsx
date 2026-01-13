import type { Metadata } from "next";
import { Inter, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix-two-text",
});

export const metadata: Metadata = {
  title: "Axoneme",
  description: "Axoneme is an open-source developer collective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
