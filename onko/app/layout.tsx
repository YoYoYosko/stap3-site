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
  title: "AI Assistent voor Ondernemers – Slimme Zakelijke Adviseur | Stap3",
  description:
    "Stap3 is de slimme AI-assistent voor ondernemers en zzp’ers. Krijg helder antwoord op lastige vragen, laat automatisch taken en agendapunten aanmaken, ontvang actuele regelgeving en genereer marketingcontent op maat.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "AI Assistent voor Ondernemers – Slimme Zakelijke Adviseur | Stap3",
    description:
      "Stap3 is de slimme AI-assistent voor ondernemers en zzp’ers. Krijg helder antwoord op lastige vragen, laat automatisch taken en agendapunten aanmaken, ontvang actuele regelgeving en genereer marketingcontent op maat.",
    url: "https://www.stap3.nl",
    siteName: "Stap3",
    images: [
      {
        url: "/og-image-s.png",   // <- deze moet je zelf toevoegen in /public/
        width: 1200,
        height: 630,
        alt: "AI Assistent voor Ondernemers – Slimme Zakelijke Adviseur | Stap3",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Assistent voor Ondernemers – Slimme Zakelijke Adviseur | Stap3",
    description:
      "Stap3 is de slimme AI-assistent voor ondernemers en zzp’ers. Krijg helder antwoord op lastige vragen, laat automatisch taken en agendapunten aanmaken, ontvang actuele regelgeving en genereer marketingcontent op maat.",
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
