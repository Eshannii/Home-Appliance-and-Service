import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section className="relative min-h-screen bg-gradient-to-tr from-[#9ecbf5] via-[#c6e1fa] to-[#eef5fc] overflow-hidden flex flex-col justify-between pt-28 md:pt-36 text-gray-900">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex-grow flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6 leading-[1.15] tracking-tight text-blue-950 max-w-3xl drop-shadow-sm">
          {tx.hero_title}{" "}
          <span className="relative inline-block text-blue-900 font-sans font-extrabold px-2 py-0.5">
            {tx.hero_title2}
            <span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-400/40 -z-10 rounded"></span>
          </span>{" "}
          <br />
          {tx.hero_title3}
        </h1>

        <div className="w-full max-w-2xl bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] mb-8 transition-all duration-300">
          <p className="text-base md:text-lg text-blue-950/80 max-w-xl mx-auto mb-6 leading-relaxed font-medium">
            {tx.hero_desc}
          </p>

          {/* UPDATED: Fully responsive grid layout for professional action buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto w-full">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/96879729293"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-6 py-4 rounded-2xl shadow-md shadow-emerald-900/10 transition-all duration-200 hover:-translate-y-0.5 text-base w-full group"
            >
              <span className="truncate">{tx.hero_whatsapp}</span>
            </a>

            {/* Direct Call Button */}
            <a
              href="tel:+96879729293"
              className="inline-flex items-center justify-center gap-3 bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-4 rounded-2xl shadow-md shadow-blue-950/10 transition-all duration-200 hover:-translate-y-0.5 text-base w-full group"
            >
              <span className="truncate">{tx.hero_call}</span>
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-semibold text-blue-950 mb-8">
          {[
            { label: tx.hero_tag1, icon: "⚡" },
            { label: tx.hero_tag2, icon: "✓" },
            { label: tx.hero_tag3, icon: "📍" },
            { label: tx.hero_tag4, icon: "💰" },
          ].map((tag) => (
            <span
              key={tag.label}
              className="flex items-center gap-1.5 bg-white/40 backdrop-blur-md border border-white/60 px-4 py-2 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.03)] tracking-wide"
            >
              <span className="text-amber-600 font-bold">{tag.icon}</span>{" "}
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Image */}
      <div className="relative w-full max-w-4xl mx-auto px-6 mt-auto">
        <div className="relative aspect-[16/10] md:aspect-[16/8] w-full rounded-t-3xl overflow-hidden shadow-[0_-15px_40px_rgba(15,23,42,0.08)] border-t border-x border-white/50 bg-white/20 backdrop-blur-sm p-2 pb-0">
          <div className="w-full h-full rounded-t-2xl overflow-hidden relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7Rn8GQ9EQnYpwsGXAB57HOlFNmrayJKfLQ&s"
              alt="Appliance Repair Service"
              className="w-full h-full object-cover object-center brightness-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#c6e1fa]/10 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
