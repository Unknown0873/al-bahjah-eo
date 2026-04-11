export default function VisionMission() {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-emerald-900 text-center mb-16">Visi dan Misi Perusahaan</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Visi</h3>
            <p className="leading-relaxed text-gray-700">Menjadi mitra penyelenggara event yang terpercaya bagi masyarakat luas, dengan mendedikasikan diri untuk merancang dan melaksanakan acara-acara unggul yang tak hanya berkesan secara profesional, tetapi juga sarat akan nilai-nilai syariah Islam.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Misi</h3>
            <p className="leading-relaxed text-gray-700">Mendukung kemandirian ekonomi Pondok Pesantren Al-Bahjah dan mewarnai dunia event dengan nilai-nilai syiar Islam.</p>
          </div>
        </div>
      </div>
    </section>
  );
}