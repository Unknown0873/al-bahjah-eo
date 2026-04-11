import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Kolom Logo */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              {/* Logo dari file lokal */}
              <img 
                src="/images/logo-1.png"   // ← Logo lokal
                alt="Al-Bahjah Event Organizer"
                className="w-60 h-auto object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold tracking-tight"></h3>
                <p className="text-emerald-400 text-sm -mt-1"></p>
              </div>
            </div>
            
            <p className="text-emerald-100 leading-relaxed max-w-xs">
              Solusi Tepat Sukseskan Acara Anda
            </p>
          </div>

          {/* Kolom Hubungi Kami */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-5 text-lg">Hubungi Kami</h4>
            <div className="space-y-4 text-emerald-100">
              <p>📍 Ponpes Al-Bahjah Center, Cirebon</p>
              <p>☎️ 0811-1111-1703</p>
              <p>
                📱 <a href="https://wa.me/6281111111703" target="_blank" className="hover:text-yellow-400">
                  0811-1111-1703 (WhatsApp)
                </a>
              </p>
            </div>
          </div>

          {/* Kolom Link Cepat */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-5 text-lg">Link Cepat</h4>
            <div className="flex flex-col gap-3 text-emerald-100">
              <Link href="#about" className="hover:text-yellow-400">Tentang Kami</Link>
              <Link href="#services" className="hover:text-yellow-400">Layanan</Link>
              <Link href="#portfolio" className="hover:text-yellow-400">Portofolio</Link>
              <Link href="#katalog" className="hover:text-yellow-400">Katalog Peralatan</Link>
            </div>
          </div>

        </div>

        <div className="border-t border-emerald-800 mt-16 pt-8 text-center text-emerald-500 text-sm">
          © 2026 Event Organizer Al-Bahjah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}