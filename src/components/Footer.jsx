import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export default function Footer() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <footer className="relative bg-[#c6e1fa] border-t border-white/50 text-gray-900 py-12 text-center overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/20 backdrop-blur-md pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Company Name */}
        <p className="font-serif font-black text-xl tracking-tight text-blue-950 mb-2">
          {lang === "en"
            ? "Umm Mahab Al-Mashariah Trading"
            : "أم مهاب المعشرية للتجارة"}
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs md:text-sm font-semibold text-blue-900/80 mb-6">
          <span className="flex items-center gap-1">
            📍{" "}
            {lang === "en"
              ? "Al Amaraat, Muscat, Oman"
              : "العامرات، مسقط، عمان"}
          </span>
          <span className="hidden sm:inline text-blue-950/20">|</span>
          <a
            href="tel:+96879729293"
            className="hover:text-blue-950 hover:underline transition-all flex items-center gap-1"
          >
            📞 +968 79729293
          </a>
        </div>

        <div className="w-16 h-0.5 bg-blue-950/10 rounded-full mb-6" />

        {/* Copyright */}
        <p className="text-gray-500 font-medium text-[11px] uppercase tracking-widest">
          © {new Date().getFullYear()} {tx.footer_rights}
        </p>
      </div>
    </footer>
  );
}
