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
  description: "Stap3 is je slimme assistent voor regels, geldzaken en zichtbaarheid. Speciaal voor Nederlandse zzp’ers en kleine ondernemers die minder willen ploeteren en meer willen ondernemen.",
  icons: {
    icon: "/favicon.png", // <-- hier jouw favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GA />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
