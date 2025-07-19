import type { Metadata } from "next";
import "@/styles/main.scss";
import defaultFont from "@/constants/font";
import Footer from "@/components/Footer";

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
        className={`${defaultFont.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
