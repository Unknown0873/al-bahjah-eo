"use client";

import Image from "next/image";

export default function KatalogPeralatan() {
  const peralatan = [
    { name: "Sound System", desc: "Kami memastikan setiap kata dan lantunan nada terdengar sempurna. Kami menyajikan sound system berkualitas yang menghasilkan suara jernih dan detail, membuat pesan acara Anda tersampaikan dengan baik.", image: "/images/katalog/sound-system.png" },
    { name: "Videotron", desc: "Kami dirancang untuk menayangkan video resolusi tinggi tanpa jeda. Gerakan gambar yang mulus dan transisi sempurna untuk pemutaran klip, animasi, hingga siaran langsung.", image: "/images/katalog/videotron.png" },
    { name: "TV LED", desc: "Kami menjadi solusi visual modern untuk acara Anda. Kami menyediakan TV LED berkualitas tinggi sebagai backdrop dinamis untuk menyempurnakan setiap momen acara Anda.", image: "/images/katalog/tv-led.png" },
    { name: "AC Portable", desc: "Kami menghadirkan kesejukan yang sesungguhnya. Sebuah solusi pendingin untuk mengalahkan cuaca panas dan menjaga suhu ruangan tetap ideal.", image: "/images/katalog/ac-portable.png" },
    { name: "Paket Lighting", desc: "Kami menjadi solusi pencahayaan lengkap untuk setiap kebutuhan. Dari mewarnai acara dengan PAR LED, menciptakan efek spektakuler dengan moving beam, hingga meningkatkan pencahayaan dengan fresnel.", image: "/images/katalog/paket-lighting.png" },
    { name: "Kipas Angin", desc: "Kami menghadirkan kesejukan di tengah acara Anda. Tersedia dalam berbagai ukuran untuk memastikan kenyamanan para tamu di setiap momen spesial.", image: "/images/katalog/kipas angin.png" },
    { name: "Panggung Flooring", desc: "Kami sangat cocok untuk berbagai kebutuhan mulai dari acara formal seperti seminar, wisuda, tabligh akbar, pernikahan, hingga acara keagamaan atau pertemuan komunitas.", image: "/images/katalog/panggung Flooring.png" },
    { name: "Panggung Rigging", desc: "Kami menawarkan konstruksi yang kokoh dan aman, dirakit oleh tim ahli untuk menopang semua kebutuhan acara Anda.", image: "/images/katalog/panggung-riging.png" },
    { name: "WC Portable", desc: "Kami menjadi solusi sanitasi yang bersih, nyaman, dan praktis untuk semua jenis acara. Pastikan tamu Anda mendapatkan fasilitas terbaik di manapun lokasi event Anda diselenggarakan.", image: "/images/katalog/WC-Portable.png" },
    { name: "Kipas Misty Fan", desc: "Kami membuat oase sejuk di mana saja. Dilengkapi 3 tingkat kecepatan dan roda untuk penempatan fleksibel, kipas ini adalah solusi pendingin praktis dan efisien untuk venue indoor maupun outdoor.", image: "/images/katalog/Kipas-Embun.png" },
  ];

  return (
    <section id="katalog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Katalog Peralatan Event
          </h2>
          <p className="text-xl text-gray-600">
            Peralatan lengkap berkualitas tinggi untuk mendukung kesuksesan acara Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {peralatan.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container - Tidak Terpotong */}
              <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  {item.name}
                </h3>
                <div className="text-gray-700 leading-relaxed text-[15.2px] h-44 overflow-y-auto pr-3 custom-scroll">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}