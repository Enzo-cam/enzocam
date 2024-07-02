import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enzo Cámera",
  description: "Personal page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/enzocamIcon.png" sizes="any" />
        <meta property="og:title" content="Enzo Cámera" />
        <meta
          property="og:description"
          content="Personal page of Enzo Cámera."
        />
        <meta
          property="og:image"
          content="https://enzocam.vercel.app/path_to_your_image.jpg"
        />
        <meta property="og:url" content="https://enzocam-co.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="Personal Page" content="Portfolio Enzo Camera" />
        <link rel="icon" href="/enzocamIcon.png" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
