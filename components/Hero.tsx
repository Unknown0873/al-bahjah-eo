"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Background Event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-emerald-900/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
          Acara Ngga Cuman Berkesan,
          <br />
          <span className="text-yellow-400">Tapi InsyaAllah Berkah</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8">
          Layanan Event Organizer Syar&apos;i dari Al-Bahjah Cirebon
        </p>

        {/* Tombol - sudah diperbaiki untuk HP */}
        <div className="flex flex-col gap-4 items-center max-w-xs mx-auto">
          <a
            href="#portfolio"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-bold text-base py-3.5 rounded-2xl transition-all text-center"
          >
            Lihat Portfolio Kami
          </a>

          <a
            href="https://wa.me/6281111111703"
            target="_blank"
            className="w-full border-2 border-white text-white hover:bg-white hover:text-emerald-900 font-bold text-base py-3.5 rounded-2xl transition-all text-center"
          >
            Konsultasi Gratis
          </a>
        </div>

        <p className="text-white/80 text-sm mt-10">
          Melayani pemesanan wilayah Pulau Jawa & sekitarnya
        </p>
      </div>
    </section>
  );
}