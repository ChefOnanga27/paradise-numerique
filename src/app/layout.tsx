import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import "./globals.css";

// Chargement de Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paradise Numerique",
  description: "Votre partenaire digitale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
