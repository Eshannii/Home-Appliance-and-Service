import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export default function Contact() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#d2e5f5] to-[#c6e1fa] relative overflow-hidden text-gray-900"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-300/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-950 mb-3 tracking-tight">
          {tx.contact_title}
        </h2>
        <p className="text-base font-medium text-blue-900/70 mb-12">
          {tx.contact_sub}
        </p>

        {/* Contact Card */}
        <div className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col gap-5">
          {/* WhatsApp */}
          <a
            href="https://wa.me/96879729293"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-4 rounded-2xl text-lg shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.451 5.438 1.453 5.441 0 9.868-4.42 9.872-9.853.002-2.631-1.019-5.105-2.876-6.964C17.164 1.83 14.692.81 12.062.81c-5.445 0-9.873 4.42-9.877 9.854-.001 1.95.507 3.851 1.474 5.544l-.995 3.636 3.725-.977zm12.306-7.142c-.33-.165-1.951-.963-2.251-1.072-.3-.109-.518-.165-.736.165-.218.329-.842 1.072-1.032 1.291-.189.218-.379.245-.71.081-1.311-.657-2.339-1.148-3.266-2.734-.245-.42.245-.39.7-.129.409.234.908.529 1.01.736.102.207.051.398-.025.562-.076.165-.736 1.771-.109 2.072-.354.3-.744.409-.995.409-.234-.002-.454-.012-.661-.035-1.157-.132-2.327-.584-3.284-1.541-.756-.756-1.175-1.765-1.175-2.83 0-1.043.406-2.019 1.143-2.756.245-.245.54-.374.88-.374.159 0 .311.004.451.012.353.016.528.037.766.275.295.295 1.01 2.458 1.098 2.64.088.181.145.393.025.632-.12.239-.26.39-.519.689-.088.102-.18.213-.277.327-.129.151-.264.316-.11.58.295.508.794 1.042 1.488 1.657.893.79 1.648 1.035 2.222 1.21.311.094.593.045.819-.199.295-.319 1.284-1.493 1.442-2.002.158-.51.079-.95-.04-1.114-.118-.164-.411-.263-.742-.429z" />
            </svg>
            <span>WhatsApp: +968 79729293</span>
          </a>

          {/* Call */}
          <a
            href="tel:+96879729293"
            className="flex items-center justify-center gap-3 bg-blue-950 hover:bg-blue-900 text-white font-bold py-4 rounded-2xl text-lg shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5 stroke-current fill-none"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.143-7.143c-.154-.441.018-.928.393-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z"
              />
            </svg>
            <span>
              {lang === "en" ? "Call: +968 79729293" : "اتصل: 96879729293+"}
            </span>
          </a>

          <div className="w-full h-px bg-blue-950/10 my-2" />

          {/* Address */}
          <div className="flex flex-col items-center gap-2 text-gray-700 font-medium">
            <div className="inline-flex bg-white p-2 rounded-xl shadow-sm border border-blue-50 mb-1 text-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <p className="text-sm md:text-base tracking-wide text-blue-950 font-bold">
              {lang === "en"
                ? "Building 7531, Near Sultan Center"
                : "مبنى 7531، بالقرب من سلطان سنتر"}
            </p>
            <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider">
              {lang === "en"
                ? "Al Amaraat, Muscat, Oman"
                : "العامرات، مسقط، عمان"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
