export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-emerald-900 mb-8">Selamat Datang di Perusahaan Kami</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Berangkat dari tekad untuk membangun kemandirian ekonomi Pondok Pesantren Al-Bahjah serta menanamkan nilai-nilai syariah dalam setiap kegiatan di tengah masyarakat, kami membentuk Event Organizer Al-Bahjah. 
              Lembaga ini diharapkan menjadi wadah yang memberikan solusi untuk kebutuhan acara, mulai dari kegiatan bisnis, perjalanan, hingga komunikasi kreatif dan visual.
            </p>
            <div className="mt-10 bg-emerald-900 text-white px-8 py-5 rounded-2xl inline-flex items-center gap-4">
              <div>
                <p className="font-semibold">Yusup</p>
                <p className="text-sm">Manager Event Organizer Al-Bahjah</p>
              </div>
            </div>
          </div>
          <img 
            src="/images/about-eo.png"   // ← Ganti dengan nama file kamu
            alt="Yusup" 
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}