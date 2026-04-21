export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Perubahan utama: Gunakan flex-col-reverse agar gambar di atas pada mobile, 
            lalu kembali ke flex-row (menyamping) pada desktop (lg) */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Sisi Teks */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-8 text-center lg:text-left">
              Selamat Datang di Perusahaan Kami
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 text-justify lg:text-left">
              Berangkat dari tekad untuk membangun kemandirian ekonomi Pondok Pesantren Al-Bahjah serta menanamkan nilai-nilai syariah dalam setiap kegiatan di tengah masyarakat, kami membentuk Event Organizer Al-Bahjah. 
              Lembaga ini diharapkan menjadi wadah yang memberikan solusi untuk kebutuhan acara, mulai dari kegiatan bisnis, perjalanan, hingga komunikasi kreatif dan visual.
            </p>
            
            {/* Box Nama Manager - Dibuat full width di mobile agar rapi */}
            <div className="mt-10 bg-emerald-900 text-white px-8 py-5 rounded-2xl flex items-center justify-center lg:justify-start gap-4">
              <div>
                <p className="font-semibold">Yusup</p>
                <p className="text-sm opacity-90">Manager Event Organizer Al-Bahjah</p>
              </div>
            </div>
          </div>

          {/* Sisi Gambar */}
          <div className="w-full lg:w-1/2">
            <img 
              src="/images/about-eo.png" 
              alt="Yusup" 
              className="rounded-3xl shadow-2xl w-full object-cover max-h-[500px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}