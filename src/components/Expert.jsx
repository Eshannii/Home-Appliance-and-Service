import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

export default function Expert() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="expert" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-3">
            {tx.expert_title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 shadow-lg">
          {/* Photo */}
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-blue-900 shadow-xl flex-shrink-0 bg-gray-200">
            <img
              src="/images/Asif.jfif"
              alt="Asif"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML =
                  '<div class="w-full h-full flex items-center justify-center text-6xl">👨‍🔧</div>';
              }}
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center lg:text-start">
            <h3 className="text-3xl font-bold text-blue-900 mb-1">
              {tx.expert_name}
            </h3>
            <p className="text-red-500 font-semibold mb-4">{tx.expert_role}</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {tx.expert_desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                tx.expert_tag1,
                tx.expert_tag2,
                tx.expert_tag3,
                tx.expert_tag4,
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-900 text-white text-xs font-bold px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
