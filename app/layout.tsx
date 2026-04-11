import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "AB Event Organizer Al-Bahjah | Event Berkah Cirebon",
  description: "Full Service Event Organizer Syar'i di Cirebon. Wedding, Maulid, Buka Puasa, Seminar Islami. Acara penuh berkah.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}