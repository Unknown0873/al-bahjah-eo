export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white overflow-hidden">
      {/* Container utama dengan padding horizontal agar tidak mepet ke pinggir layar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Kontainer Flex: Col-reverse di mobile, Row di desktop */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* SISI TEKS (Lebar 55% di desktop agar teks lebih leluasa) */}
          <div className="w-full lg:w-[55%] space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 leading-tight">
              Selamat Datang di <br className="hidden lg:block" /> Perusahaan Kami
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify lg:text-left">
              Berangkat dari tekad untuk membangun kemandirian ekonomi Pondok Pesantren Al-Bahjah serta menanamkan nilai-nilai syariah dalam setiap kegiatan di tengah masyarakat, kami membentuk Event Organizer Al-Bahjah. 
              Lembaga ini diharapkan menjadi wadah yang memberikan solusi untuk kebutuhan acara, mulai dari kegiatan bisnis, perjalanan, hingga komunikasi kreatif dan visual.
            </p>
            
            {/* Box Nama Manager */}
            <div className="inline-block bg-emerald-900 text-white px-8 py-5 rounded-2xl shadow-lg">
              <p className="font-bold text-xl">Yusup</p>
              <p className="text-sm opacity-90">Manager Event Organizer Al-Bahjah</p>
            </div>
          </div>

          {/* SISI GAMBAR (Lebar 45% di desktop) */}
          <div className="w-full lg:w-[45%]">
            <div className="relative group">
              <img 
                src="/images/about-eo.png" 
                alt="Manager Al-Bahjah" 
                className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5] shadow-emerald-900/10"
              />
              {/* Aksen dekoratif tipis di desktop */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-emerald-200 rounded-tr-3xl -z-10 hidden lg:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}