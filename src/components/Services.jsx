import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const services = [
  {
    icon: (
      <svg
        className="w-6 h-6 stroke-current fill-none text-blue-600"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title_en: "Washing Machine",
    title_ar: "غسالة",
    desc_en:
      "Repair & maintenance of all major brands and front/top load models.",
    desc_ar: "إصلاح وصيانة جميع الماركات الكبرى من غسالات أمامية وعلوية.",
    msg_en: "Hi, I need service for my Washing Machine",
    msg_ar: "مرحبا، أحتاج خدمة لغسالتي",
    image:
      "https://production-next-images-cdn.thumbtack.com/i/491082810021683205/width/1024",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 stroke-current fill-none text-blue-600"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m0-18l4 4m-4-4L8 7m4 14l4-4m-4 4l-4-4"
        />
      </svg>
    ),
    title_en: "Refrigerator",
    title_ar: "ثلاجة",
    desc_en:
      "Fixing cooling issues, gas refills, leak detection, and compressor repair.",
    desc_ar: "إصلاح مشاكل التبريد وإعادة شحن الغاز واستبدال الضاغط.",
    msg_en: "Hi, I need service for my Refrigerator",
    msg_ar: "مرحبا، أحتاج خدمة لثلاجتي",
    image:
      "https://t4.ftcdn.net/jpg/07/40/04/61/360_F_740046119_ANh7Md8HCNJxTfMgM3xXGqSBOXfrqAKu.jpg",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 stroke-current fill-none text-blue-600"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h5.75c.966 0 1.75-.784 1.75-1.75V4.25c0-.966-.784-1.75-1.75-1.75H4.25c-.966 0-1.75.784-1.75 1.75v15c0 .966.784 1.75 1.75 1.75H9z"
        />
      </svg>
    ),
    title_en: "Air Conditioner",
    title_ar: "مكيف هواء",
    desc_en:
      "Expert AC installation, deep chemical servicing, and gas charging.",
    desc_ar: "تركيب وصيانة وشحن غاز مكيفات الهواء بأعلى جودة.",
    msg_en: "Hi, I need service for my Air Conditioner",
    msg_ar: "مرحبا، أحتاج خدمة لمكيفي",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoTf9X9O7_7fqXGQuIkXdz1XNih7wj_ywqA&s",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 stroke-current fill-none text-blue-600"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-3 3M21 7.5l-3-3M21 7.5H8.25m0 0l3 3m-3-3l3-3m-3 3v8.25m0 0l-3-3m3 3l-3 3"
        />
      </svg>
    ),
    title_en: "Microwave Oven",
    title_ar: "ميكروويف",
    desc_en:
      "Heating issues solved, magnetron replacement, and genuine parts fix.",
    desc_ar: "حل مشاكل التسخين واستبدال قطع الغيار الأصلية.",
    msg_en: "Hi, I need service for my Microwave Oven",
    msg_ar: "مرحبا، أحتاج خدمة لميكروويفي",
    image:
      "https://t4.ftcdn.net/jpg/03/29/70/47/360_F_329704740_i0FpAgThkRmqLwCnWXxspFiade7i86Kg.jpg",
  },
];

export default function Services() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#eef5fc] to-[#e1edf8]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-950 mb-4 tracking-tight">
            {tx.services_title}
          </h2>
          <div className="inline-block bg-white/60 backdrop-blur-md border border-white/80 px-4 py-1.5 rounded-full text-xs font-bold text-blue-900 tracking-wide shadow-sm">
            {tx.services_sub}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title_en}
              className="group bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden border-b border-white/40">
                <img
                  src={s.image}
                  alt={lang === "en" ? s.title_en : s.title_ar}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.98]"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-md p-2.5 rounded-2xl shadow-sm border border-white">
                  {s.icon}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-blue-950 mb-2 tracking-tight group-hover:text-blue-900 transition-colors">
                    {lang === "en" ? s.title_en : s.title_ar}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {lang === "en" ? s.desc_en : s.desc_ar}
                  </p>
                </div>

                {/* Book Service */}
                <a
                  href={`https://wa.me/96879729293?text=${lang === "en" ? s.msg_en : s.msg_ar}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 pt-4 border-t border-blue-950/5 flex items-center justify-between text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <span>{tx.book}</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
