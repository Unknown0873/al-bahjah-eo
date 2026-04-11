export default function Testimoni() {
  const testimonials = [
    {
      name: "Ustadz Ahmad",
      role: "Panitia Maulid Nabi",
      text: "Alhamdulillah, acara Maulid berjalan sangat khidmat dan tertata rapi. Tim AB Event Organizer sangat profesional dan paham nuansa syar'i.",
      image: "/images/Testimoni.png",
    },
    {
      name: "Hj. Siti Aisyah",
      role: "Klien Wedding",
      text: "Pernikahan anak saya sangat berkesan. Dekorasi elegan, sound system jernih, dan semuanya sesuai budget. Terima kasih Al-Bahjah!",
      image: "/images/Testimoni.png",
    },
    {
      name: "Dr. Muhammad Ridwan",
      role: "Penyelenggara Seminar",
      text: "Seminar kami dihadiri lebih dari 500 orang. Semua teknis (panggung, sound, lighting) berjalan lancar. Rekomendasi banget!",
      image: "/images/Testimoni.png",
    },
  ];

  return (
    <section id="testimoni" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Apa Kata Mereka
          </h2>
          <p className="text-xl text-emerald-700">
            Testimoni dari klien yang telah mempercayakan acara mereka kepada kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-200"
                />
                <div>
                  <h4 className="font-semibold text-emerald-900">{item.name}</h4>
                  <p className="text-sm text-emerald-600">{item.role}</p>
                </div>
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-6 flex text-yellow-400">
                ★★★★☆
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}