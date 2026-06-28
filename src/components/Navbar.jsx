import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const tx = t[lang];

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* UPDATED LOGO SECTION WITH TAGLINE */}
          <div className="flex flex-col leading-tight">
            <div className="text-xl md:text-2xl font-black tracking-tight text-blue-950">
              {lang === "en" ? (
                <>
                  UMM <span className="text-red-600">MAHAB</span>
                </>
              ) : (
                <>
                  أم <span className="text-red-600">مهاب</span>
                </>
              )}
            </div>
            <span className="text-[10px] md:text-xs font-semibold text-gray-500 tracking-wide mt-0.5 uppercase">
              {lang === "en"
                ? "home appliance service and repair by ASIF"
                : "خدمة وإصلاح الأجهزة المنزلية - آصف"}
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a
              href="#services"
              className="hover:text-blue-900 transition-colors"
            >
              {tx.nav_services}
            </a>
            <a href="#whyus" className="hover:text-blue-900 transition-colors">
              {tx.nav_whyus}
            </a>
            <a href="#about" className="hover:text-blue-900 transition-colors">
              {tx.nav_about}
            </a>
            <a
              href="#contact"
              className="hover:text-blue-900 transition-colors"
            >
              {tx.nav_contact}
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="border-2 border-blue-950 text-blue-950 font-bold px-4 py-1.5 rounded-full text-sm hover:bg-blue-950 hover:text-white transition-all"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <a
              href="https://wa.me/96879729293"
              className="bg-blue-950 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-900 transition-all shadow-sm"
            >
              {tx.nav_whatsapp}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-blue-950 text-2xl p-1"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-4 flex flex-col gap-4 text-gray-700 font-medium shadow-inner animate-fadeIn">
            <a href="#services" className="py-1" onClick={() => setOpen(false)}>
              {tx.nav_services}
            </a>
            <a href="#whyus" className="py-1" onClick={() => setOpen(false)}>
              {tx.nav_whyus}
            </a>
            <a href="#about" className="py-1" onClick={() => setOpen(false)}>
              {tx.nav_about}
            </a>
            <a href="#contact" className="py-1" onClick={() => setOpen(false)}>
              {tx.nav_contact}
            </a>
            <div className="h-px bg-gray-100 my-1"></div>
            <button
              onClick={() => {
                toggleLang();
                setOpen(false);
              }}
              className="border-2 border-blue-950 text-blue-950 font-bold px-4 py-2 rounded-full w-full"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <a
              href="https://wa.me/96879729293"
              className="bg-blue-950 text-white px-4 py-2.5 rounded-full text-center font-bold shadow-sm"
              onClick={() => setOpen(false)}
            >
              {tx.nav_whatsapp}
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
