export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-emerald-900 text-center mb-4">Layanan Kami</h2>
        <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto mb-16">
          Kami menyediakan solusi lengkap dan profesional untuk menyukseskan setiap acara Anda.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Layanan Konsultasi Kreatif</h3>
            <p className="text-gray-600">Punya ide tapi bingung bagaimana memulainya? Diskusikan bersama kami untuk merancang konsep acara yang unik dan sesuai anggaran.</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Dukungan Teknis & Peralatan</h3>
            <p className="text-gray-600">Sound system, lighting, multimedia, panggung, dan semua kebutuhan teknis dioperasikan oleh kru profesional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}