"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"   // ← Ganti dengan nama file kamu
          alt="Background Event"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gelap supaya teks tetap jelas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-emerald-900/60 to-black/70"></div>
      </div>

      {/* Content Teks */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Acara Ngga Cuman Berkesan,<br />
          <span className="text-yellow-400">Tapi InsyaAllah Berkah</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Layanan Event Organizer Syar&apos;i dari Al-Bahjah Cirebon
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#portfolio"
            className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 inline-block"
          >
            Lihat Portfolio Kami
          </a>

          <a
            href="https://wa.me/6281111111703"
            target="_blank"
            className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 inline-block"
          >
            Konsultasi Gratis
          </a>
        </div>

        <p className="text-white/80 text-base md:text-lg">
          Melayani pemesanan wilayah Pulau Jawa &amp; sekitarnya
        </p>
      </div>
    </section>
  );
}