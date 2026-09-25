import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import { CartProvider } from "../components/context/CartContext";

export const metadata: Metadata = {
  title: "AB Event Organizer Al-Bahjah | Event Berkah Cirebon",
  description: "Full Service Event Organizer Syar'i di Cirebon. Wedding, Maulid, Buka Puasa, Seminar Islami.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}