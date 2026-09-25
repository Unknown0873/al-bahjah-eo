"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Katalog", href: "#katalog" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="#home" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img 
              src="/images/logo.png" 
              alt="Al-Bahjah Event Organizer"
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-emerald-800 font-medium">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="hover:text-emerald-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/6281111111703" 
              target="_blank"
              className="bg-emerald-700 text-white px-5 py-2.5 rounded-xl hover:bg-emerald-800 transition font-semibold"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-emerald-900 p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background gelap */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="absolute top-0 left-0 right-0 bg-white pt-20 pb-8 px-6 shadow-2xl">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-emerald-900 font-medium text-lg py-4 border-b border-emerald-50 hover:text-emerald-600 transition"
                >
                  {item.name}
                </Link>
              ))}

              <a 
                href="https://wa.me/6281111111703" 
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-emerald-700 text-white text-center py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-800 transition"
              >
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}