export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* flex-col-reverse: Foto di atas (mobile), lg:flex-row: Sampingan (desktop) */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Sisi Teks & Info Manager */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold text-emerald-900 mb-6 text-center lg:text-left">
              Selamat Datang di Perusahaan Kami
            </h2>
            
            <p className="text-base lg:text-lg leading-relaxed text-gray-700 text-justify lg:text-left mb-8">
              Berangkat dari tekad untuk membangun kemandirian ekonomi Pondok Pesantren Al-Bahjah serta menanamkan nilai-nilai syariah dalam setiap kegiatan di tengah masyarakat, kami membentuk Event Organizer Al-Bahjah. 
              Lembaga ini diharapkan menjadi wadah yang memberikan solusi untuk kebutuhan acara, mulai dari kegiatan bisnis, perjalanan, hingga komunikasi kreatif dan visual.
            </p>
            
            {/* Box Nama Manager - Dioptimalkan agar tidak terlalu jangkung di mobile */}
            <div className="bg-emerald-900 text-white px-6 py-4 rounded-2xl flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
              <div className="flex-1">
                <p className="font-bold text-lg">Yusup</p>
                <p className="text-sm opacity-90">Manager Event Organizer Al-Bahjah</p>
              </div>
            </div>
          </div>

          {/* Sisi Gambar - Memberikan margin bawah sedikit di mobile agar tidak menempel ke teks */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="relative">
              <img 
                src="/images/about-eo.png" 
                alt="Manager Al-Bahjah" 
                className="rounded-3xl shadow-xl w-full object-cover max-h-[400px] lg:max-h-[550px]"
              />
              {/* Dekorasi tambahan (opsional): Aksen hijau di belakang foto agar lebih estetik */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full hidden lg:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}