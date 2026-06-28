import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export default function About() {
  const [activeImg, setActiveImg] = useState(null);
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#c6e1fa] to-[#eef5fc] text-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-950 mb-3 tracking-tight">
            {tx.about_title}
          </h2>
          <p className="text-base font-medium text-blue-900/70">
            {tx.about_sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT — Visiting Card */}
          <div className="flex flex-col bg-white/45 backdrop-blur-xl border border-white/60 rounded-3xl p-6 md:p-8 shadow-[0_15px_35px_rgba(15,23,42,0.04)] justify-between group">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-xl text-white shadow-sm">
                  <svg
                    className="w-5 h-5 fill-none stroke-current"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-950 tracking-tight">
                  {tx.about_card}
                </h3>
              </div>

              <div
                onClick={() => setActiveImg("/images/card.jfif")}
                className="rounded-2xl overflow-hidden shadow-md border border-white bg-gray-900/5 aspect-[16/10] relative cursor-pointer group/img"
              >
                <img
                  src="/images/card.jfif"
                  alt="Umm Mahab Business Card"
                  className="w-full h-full object-contain group-hover/img:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="bg-white/90 text-blue-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    🔍 {lang === "en" ? "Click to Zoom" : "انقر للتكبير"}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 font-medium text-xs md:text-sm text-center mt-6 bg-white/50 border border-white/60 py-2.5 px-4 rounded-xl shadow-inner">
              {tx.about_address}
            </p>
          </div>

          {/* RIGHT — Shop Image */}
          <div className="flex flex-col bg-white/45 backdrop-blur-xl border border-white/60 rounded-3xl p-6 md:p-8 shadow-[0_15px_35px_rgba(15,23,42,0.04)] justify-between group">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-xl text-white shadow-sm">
                  <svg
                    className="w-5 h-5 fill-none stroke-current"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72M6.75 18h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-950 tracking-tight">
                  {tx.about_shop}
                </h3>
              </div>

              <div
                onClick={() => setActiveImg("/images/dukan.jfif")}
                className="rounded-2xl overflow-hidden shadow-md border border-white bg-gray-900/5 aspect-[16/10] relative cursor-pointer group/img"
              >
                <img
                  src="/images/dukan.jfif"
                  alt="Our Shop Front"
                  className="w-full h-full object-contain group-hover/img:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="bg-white/90 text-blue-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    🔍 {lang === "en" ? "Click to Zoom" : "انقر للتكبير"}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 font-medium text-xs md:text-sm text-center mt-6 bg-white/50 border border-white/60 py-2.5 px-4 rounded-xl shadow-inner">
              {lang === "en"
                ? "Shop hours: 8:00 AM - 10:00 PM • Fast Doorstep Service Available"
                : "ساعات العمل: ٨ صباحاً - ١٠ مساءً • خدمة سريعة على عتبة بابك"}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setActiveImg(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <button
              className="absolute -top-12 right-0 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors text-sm font-semibold px-4"
              onClick={() => setActiveImg(null)}
            >
              ✕ {lang === "en" ? "Close" : "إغلاق"}
            </button>
            <img
              src={activeImg}
              alt="Zoomed View"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
