import React from 'react';
import { Scissors, Sparkles, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface HeritageProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Heritage: React.FC<HeritageProps> = ({ currentLang, onOpenBooking }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-20 bg-neutral-900/40 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Asset showing European Barbering Craft */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl group bg-neutral-950">
              <img
                src="/src/assets/images/young_european_barber_client_1790997006224.jpg"
                alt="Master European barber handcrafting a precision shear haircut for a young European client in Chicago"
                className="w-full aspect-[4/3] object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    European Barbering Standard
                  </div>
                  <div className="text-sm font-bold text-neutral-100 font-display mt-0.5">
                    Japanese Steel Shears & Precision Tapers
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
              {t.heritage.kicker}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 font-display leading-tight">
              {t.heritage.title}
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              {t.heritage.desc}
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/90 flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-100 font-display">
                    {t.heritage.point1Title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {t.heritage.point1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/90 flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-100 font-display">
                    {t.heritage.point2Title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {t.heritage.point2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/90 flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-400/10 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-100 font-display">
                    {t.heritage.point3Title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {t.heritage.point3Desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95"
              >
                <span>Book Master Haircut ($25)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
