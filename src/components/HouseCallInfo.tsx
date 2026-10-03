import React, { useState } from 'react';
import { MapPin, ShieldCheck, Copy, Check, ExternalLink, Calendar, Car } from 'lucide-react';
import { BARBER_CONTACT } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface HouseCallInfoProps {
  currentLang: Language;
  onOpenBookingWithHouseCall: () => void;
}

export const HouseCallInfo: React.FC<HouseCallInfoProps> = ({
  currentLang,
  onOpenBookingWithHouseCall,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [copied, setCopied] = useState(false);

  const handleCopyCashtag = () => {
    navigator.clipboard.writeText(BARBER_CONTACT.cashAppTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="house-calls" className="py-20 bg-neutral-900/50 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Gear Kit */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl">
              <img
                src="/src/assets/images/mobile_barber_gear_1790944560477.jpg"
                alt="Mobile barber kit equipped for Chicago house calls"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800">
                <div className="flex items-center justify-between text-xs">
                  <div className="font-semibold text-neutral-200">
                    {t.houseCalls.gearBadge}
                  </div>
                  <div className="text-amber-400 font-mono">Chicago City Only</div>
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Cordless high-torque clippers, Japanese steel shears, fresh neck strips & floor protection.
                </div>
              </div>
            </div>
          </div>

          {/* Details & Cash App Card */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
              {t.houseCalls.kicker}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 font-display">
              {t.houseCalls.title}
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              {t.houseCalls.desc}
            </p>

            {/* Travel fee & Cash App highlight card */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-700/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
                <div>
                  <div className="text-xs text-neutral-400 font-medium">{t.houseCalls.travelFeeTitle}</div>
                  <div className="text-3xl font-extrabold font-mono text-amber-400 tabular-nums">
                    +${BARBER_CONTACT.houseCallFee} <span className="text-sm font-sans text-neutral-400 font-normal">{t.houseCalls.travelFeeDesc}</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-400 flex items-center gap-1.5 sm:text-right">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.houseCalls.chicagoOnlyBadge}</span>
                </div>
              </div>

              {/* Cash App requirement breakdown */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-sm text-neutral-300">
                    <strong className="text-neutral-100 font-semibold">{t.houseCalls.depositRequiredTitle}:</strong>{' '}
                    {t.houseCalls.depositRequiredDesc}
                  </div>
                </div>

                {/* Cashtag Copy Bar */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <div className="w-full sm:w-auto flex-1 flex items-center justify-between px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-500">Cash App:</span>
                      <span className="text-amber-400 font-bold text-base">{BARBER_CONTACT.cashAppTag}</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyCashtag}
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-sans">{t.houseCalls.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="font-sans">{t.houseCalls.copyTag}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={BARBER_CONTACT.cashAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors whitespace-nowrap"
                  >
                    <span>{t.houseCalls.openCashApp}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Checklist of what client needs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
                <Car className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Matt brings full mobile station & ground tarp</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.houseCalls.chairReq}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBookingWithHouseCall}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-400/10 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-neutral-950" />
                <span>{t.houseCalls.bookHouseCallBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
