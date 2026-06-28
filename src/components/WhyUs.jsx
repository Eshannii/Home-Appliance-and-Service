import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const icons = [
  <svg
    className="w-6 h-6 text-blue-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0hM9 3h6m-6 0a3 3 0 00-3 3v5.625c0 .621.503 1.125 1.125 1.125h6.75A1.125 1.125 0 0016.5 11.625V6a3 3 0 00-3-3z"
    />
  </svg>,
  <svg
    className="w-6 h-6 text-blue-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </svg>,
  <svg
    className="w-6 h-6 text-blue-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.854-1.106-2.24 0-3.093 1.147-.881 2.912-.881 4.059 0l.544.417m.536-5.636A9 9 0 1111.25 3v1.5a7.5 7.5 0 105.25 2.25h1.5z"
    />
  </svg>,
  <svg
    className="w-6 h-6 text-blue-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.143-7.143c-.154-.441.018-.928.393-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z"
    />
  </svg>,
];

export default function WhyUs() {
  const { lang } = useLang();
  const tx = t[lang];

  const reasons = [
    { icon: icons[0], title: tx.w1_title, desc: tx.w1_desc },
    { icon: icons[1], title: tx.w2_title, desc: tx.w2_desc },
    { icon: icons[2], title: tx.w3_title, desc: tx.w3_desc },
    { icon: icons[3], title: tx.w4_title, desc: tx.w4_desc },
  ];

  return (
    <section
      id="whyus"
      className="py-24 bg-gradient-to-b from-[#e1edf8] to-[#d2e5f5] text-gray-900 relative"
    >
      <div className="absolute bottom-12 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-950 mb-3 tracking-tight">
            {tx.whyus_title}
          </h2>
          <p className="text-base font-medium text-blue-900/70">
            {tx.whyus_sub}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group bg-white/45 backdrop-blur-md border border-white/60 rounded-3xl p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.07)] hover:bg-white/70 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex bg-white p-3 rounded-2xl shadow-sm border border-blue-50/50 mb-5 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-2 tracking-tight">
                {r.title}
              </h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
