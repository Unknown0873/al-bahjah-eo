"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-emerald-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Saja - Diperbesar */}
        <div className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Al-Bahjah Event Organizer"
            className="w-48 h-auto object-contain"   // ← Ukuran diperbesar
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-emerald-800 font-medium">
          <Link href="#home" className="hover:text-emerald-700 transition-colors">Beranda</Link>
          <Link href="#about" className="hover:text-emerald-700 transition-colors">Tentang Kami</Link>
          <Link href="#services" className="hover:text-emerald-700 transition-colors">Layanan</Link>
          <Link href="#portfolio" className="hover:text-emerald-700 transition-colors">Portfolio</Link>
          <Link href="#contact" className="hover:text-emerald-700 transition-colors">Kontak</Link>
          
          <a 
            href="https://wa.me/6281111111703" 
            target="_blank"
            className="bg-emerald-700 text-white px-6 py-2.5 rounded-xl hover:bg-emerald-800 transition-colors font-semibold"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-emerald-900 p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}