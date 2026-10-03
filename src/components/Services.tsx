import React from 'react';
import { Scissors, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface ServicesProps {
  currentLang: Language;
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ currentLang, onSelectService }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="services" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
            {t.services.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 font-display">
            {t.services.title}
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service) => {
            const isCombo = service.id === 'combo';
            const serviceName =
              service.id === 'haircut'
                ? t.services.haircutName
                : service.id === 'beard'
                ? t.services.beardName
                : t.services.comboName;

            const serviceDesc =
              service.id === 'haircut'
                ? t.services.haircutDesc
                : service.id === 'beard'
                ? t.services.beardDesc
                : t.services.comboDesc;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all border ${
                  isCombo
                    ? 'bg-neutral-900/90 border-amber-500/50 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-500/20'
                    : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Header info */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/90 flex items-center justify-center border border-neutral-700 shadow-inner">
                      {service.id === 'haircut' ? (
                        <Scissors className="w-6 h-6 text-amber-400" />
                      ) : service.id === 'beard' ? (
                        <Scissors className="w-6 h-6 text-neutral-300" />
                      ) : (
                        <Sparkles className="w-6 h-6 text-amber-400" />
                      )}
                    </div>

                    <div className="text-right">
                      <div className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-100 tabular-nums">
                        ${service.price}
                      </div>
                      <div className="text-xs text-neutral-500 font-mono mt-0.5">
                        {service.durationMinutes} {t.services.minutes}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-100 mb-2 font-display">
                    {serviceName}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {serviceDesc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-8">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onSelectService(service.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isCombo
                      ? 'bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-md shadow-amber-400/15'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 hover:border-neutral-600'
                  }`}
                >
                  <span>{t.services.selectBook} ${service.price}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Photography spotlight with new European Men & Haircut Styles */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 group bg-neutral-900 shadow-xl">
            <img
              src="/src/assets/images/young_european_scissor_1790996977542.jpg"
              alt="Young European man with precision scissor-over-comb crop haircut"
              className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/35 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-mono text-amber-400 mb-1 uppercase tracking-wider font-semibold">
                European Shear Mastery
              </div>
              <h4 className="text-xl font-bold text-neutral-100 font-display">
                {t.services.photoScissorTitle}
              </h4>
              <p className="text-xs text-neutral-300 mt-1.5 max-w-md leading-relaxed">
                {t.services.photoScissorDesc}
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 group bg-neutral-900 shadow-xl">
            <img
              src="/src/assets/images/young_european_beard_1790996986785.jpg"
              alt="Young European man with neat beard trim and razor shave lineup"
              className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/35 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-mono text-amber-400 mb-1 uppercase tracking-wider font-semibold">
                European Razor Detailing
              </div>
              <h4 className="text-xl font-bold text-neutral-100 font-display">
                {t.services.photoBeardTitle}
              </h4>
              <p className="text-xs text-neutral-300 mt-1.5 max-w-md leading-relaxed">
                {t.services.photoBeardDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
