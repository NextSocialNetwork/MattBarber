import React from 'react';
import { MapPin, Compass, ExternalLink, CheckCircle2 } from 'lucide-react';
import { BARBER_CONTACT } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface ChicagoMapProps {
  currentLang: Language;
  onOpenBookingWithHouseCall: () => void;
}

export const ChicagoMap: React.FC<ChicagoMapProps> = ({
  currentLang,
  onOpenBookingWithHouseCall,
}) => {
  const t = TRANSLATIONS[currentLang];

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Chicago, IL'
  )}&t=m&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="map" className="py-20 bg-neutral-900/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
            {t.map.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 font-display">
            {t.map.title}
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            {t.map.desc}
          </p>
        </div>

        {/* Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Coverage Summary Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-xs text-neutral-400">{t.map.serviceRadius}</div>
                    <div className="text-lg font-bold text-neutral-100 font-display">
                      {t.map.coverageTitle}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold">
                  +${BARBER_CONTACT.houseCallFee} Travel
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {t.map.coverageDesc}
              </p>

              <div className="text-xs text-neutral-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Confirmed within Chicago city mobile boundaries.</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenBookingWithHouseCall}
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold transition-all shadow cursor-pointer text-center"
                >
                  {t.houseCalls.bookHouseCallBtn}
                </button>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chicago+IL"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-3.5 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs flex items-center justify-center gap-1 transition-colors"
                  title="View on Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Frame */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
              {/* Map Top Status Bar */}
              <div className="p-3 bg-neutral-950/90 border-b border-neutral-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Chicago, IL</span>
                </div>
                <div className="text-amber-400 font-semibold text-[11px]">
                  {BARBER_CONTACT.cashAppTag} Deposit
                </div>
              </div>

              {/* Live Google Map Embed */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                <iframe
                  title="Chicago Service Area Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Information */}
              <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-neutral-400">
                  <strong className="text-neutral-200">Mobile Service Rule:</strong> Matt travels strictly within Chicago city borders.
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chicago+IL"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1 font-mono shrink-0"
                >
                  <span>{t.map.viewInGoogleMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
