"use client";
import { useState } from "react";
import Image from "next/image";

export default function Portofolio() {
  const [selected, setSelected] = useState<any>(null);

  const items = [
    {
      title: "Wedding Ceremony",
      category: "Acara Keagamaan",
      image: "/images/portofolio/Wedding-1.jpg",
    },
    {
      title: "Haul",
      category: "Acara Keagamaan",
      image: "/images/portofolio/Haul-1.jpg",
    },
    {
      title: "Forum Silaturahmi",
      category: "Acara Keagamaan",
      image: "/images/portofolio/Forsil-1.jpg",
    },
    {
      title: "Maulid Muslimah",
      category: "Acara Keagamaan",
      image: "/images/portofolio/Maulid-1.jpg",
    },
    // Tambahkan foto lain di sini...
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-emerald-900 text-center mb-16">
          Galeri Foto
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="font-semibold mt-2 text-emerald-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal ketika klik foto */}
      {selected && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4" 
          onClick={() => setSelected(null)}
        >
          <div 
            className="max-w-4xl w-full" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selected.image} 
              alt={selected.title} 
              width={1200} 
              height={800} 
              className="rounded-3xl" 
            />
            <button 
              className="absolute top-8 right-8 text-white text-4xl hover:text-gold-400" 
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}