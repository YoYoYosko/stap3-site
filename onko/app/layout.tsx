import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { GA } from "./GA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stap3 - Je slimme Ondernemersassistent",
  description:
    "Stap3 is je slimme assistent voor regels, geldzaken en zichtbaarheid. Speciaal voor Nederlandse zzp’ers en kleine ondernemers die minder willen ploeteren en meer willen ondernemen.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Stap3 - Je slimme Ondernemersassistent",
    description:
      "Stap3 helpt Nederlandse zzp’ers met regels, geldzaken, zichtbaarheid en slimme tools.",
    url: "https://www.stap3.nl",
    siteName: "Stap3",
    images: [
      {
        url: "/og-image-s.png",   // <- deze moet je zelf toevoegen in /public/
        width: 1200,
        height: 630,
        alt: "Stap3 - Je slimme Ondernemersassistent",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stap3 - Je slimme Ondernemersassistent",
    description:
      "Stap3 helpt Nederlandse zzp’ers met regels, geldzaken, zichtbaarheid en slimme tools.",
    images: ["/og-image.png"], // <- dezelfde afbeelding
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <meta name="google-site-verification" content="Ci-O-gyO1HYvSMHlSM3JQ-8u0ieaoW7Eo4sjc7znhQ8" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GA />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
