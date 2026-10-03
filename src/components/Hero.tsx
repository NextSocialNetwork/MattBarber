import React from 'react';
import { Calendar, Phone, MapPin, CheckCircle2, DollarSign, Award, Scissors } from 'lucide-react';
import { BARBER_CONTACT } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking, onSelectService }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 border-b border-neutral-800/80 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900/40">
      {/* Background radial luxury lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-amber-500/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proposition, Rates & Actions */}
          <div className="lg:col-span-7 space-y-7">
            {/* Elegant metadata line */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-amber-400 tracking-wider uppercase font-mono">
              <span className="flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.hero.specialty}</span>
              </span>
              <span aria-hidden="true" className="text-neutral-700">|</span>
              <span>Chicago, IL</span>
              <span aria-hidden="true" className="text-neutral-700">|</span>
              <span className="text-neutral-300">Studio & House Calls</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-100 font-display leading-[1.08]">
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              {t.hero.subheadline}
            </p>

            {/* Pricing highlights: luxury dark slate card with golden hairline borders */}
            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/85 border border-amber-500/20 backdrop-blur-md shadow-2xl max-w-xl">
              <div className="grid grid-cols-3 divide-x divide-neutral-800 text-center">
                <button
                  onClick={() => onSelectService('haircut')}
                  className="px-3 py-1.5 text-left group hover:bg-neutral-800/50 rounded-xl transition-all cursor-pointer"
                >
                  <div className="text-xs text-neutral-400 font-medium">{t.hero.haircut}</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-100 group-hover:text-amber-400 transition-colors tabular-nums mt-0.5">
                    $25
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">{t.hero.shears}</div>
                </button>

                <button
                  onClick={() => onSelectService('beard')}
                  className="px-3 py-1.5 text-left group hover:bg-neutral-800/50 rounded-xl transition-all cursor-pointer"
                >
                  <div className="text-xs text-neutral-400 font-medium">{t.hero.beardTrim}</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-100 group-hover:text-amber-400 transition-colors tabular-nums mt-0.5">
                    $15
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">{t.hero.razor}</div>
                </button>

                <button
                  onClick={() => onSelectService('haircut')}
                  className="px-3 py-1.5 text-left group hover:bg-neutral-800/50 rounded-xl transition-all cursor-pointer"
                >
                  <div className="text-xs text-neutral-400 font-medium">{t.hero.houseCall}</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400 tabular-nums mt-0.5">
                    +$25
                  </div>
                  <div className="text-[11px] text-amber-400/80 mt-0.5">{t.hero.chicagoOnly}</div>
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xl shadow-amber-400/15 transition-all cursor-pointer active:scale-98"
              >
                <Calendar className="w-5 h-5 text-neutral-950" />
                <span>{t.hero.bookCta}</span>
              </button>

              <a
                href={`tel:${BARBER_CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-medium text-neutral-200 bg-neutral-900 border border-neutral-700 hover:border-neutral-500 hover:text-white rounded-xl transition-all"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>{t.hero.callCta} {BARBER_CONTACT.phone}</span>
              </a>
            </div>

            {/* Key trust markers */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.sanitized}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.cityLimits}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-neutral-300 shrink-0" />
                <span>{t.hero.cashAppNotice}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset featuring European Haircut Style & European Man */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 bg-neutral-900 shadow-2xl group">
              <img
                src="/src/assets/images/hero_young_european_1790996968145.jpg"
                alt="Young European man with modern textured scissor haircut and clean taper at The Goat Cuts Chicago"
                className="w-full aspect-[4/3] lg:aspect-[16/12] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent pointer-events-none" />

              {/* Bottom tag on image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-100 flex items-center gap-1.5 font-display">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.hero.barberTitle}</span>
                  </div>
                  <div className="text-[12px] text-neutral-300 mt-0.5">
                    {t.hero.barberSpecialty}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-amber-400 font-mono font-bold">Chicago City</div>
                  <div className="text-[11px] text-neutral-400">{t.hero.availableDays}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
