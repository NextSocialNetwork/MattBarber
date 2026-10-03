import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle2 } from 'lucide-react';
import { CHICAGO_NEIGHBORHOODS, BARBER_CONTACT } from '../data/barberData';

interface ChicagoAreasProps {
  onOpenBookingWithHouseCall: () => void;
}

export const ChicagoAreas: React.FC<ChicagoAreasProps> = ({
  onOpenBookingWithHouseCall,
}) => {
  return (
    <section id="areas" className="py-20 bg-neutral-900/40 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
            Chicago Barber Service Territory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 font-display">
            Mobile House Calls Across Chicago City
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Professional mobile haircut and beard styling services delivered directly to your door in
            all major Chicago neighborhoods. Fast response times with cordless equipment and sanitary protocols.
          </p>
        </div>

        {/* Neighborhood Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {CHICAGO_NEIGHBORHOODS.map((neighborhood) => (
            <div
              key={neighborhood.name}
              className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <h3 className="text-sm font-bold text-neutral-200 truncate">
                  {neighborhood.name}
                </h3>
              </div>
              <div className="text-[11px] text-neutral-500 font-mono">
                {neighborhood.region}
              </div>
              <div className="text-[11px] text-emerald-400 mt-2 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>{neighborhood.travelNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* SEO & Search Relevance Card */}
        <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Chicago Local Search Authority</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 font-display">
                Looking for the Top Rated Barber in Chicago?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Whether you searched for <em>"best men's haircut Chicago"</em>, <em>"mobile barber downtown Chicago"</em>,
                <em>"scissor haircut straight hair Chicago"</em>, or <em>"in-home barber West Loop"</em>,
                Matt Cuts Chicago provides premier grooming with direct scheduling and transparent rates.
              </p>

              {/* Natural keywords list */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-neutral-500 font-mono">
                <span>#ChicagoBarber</span>
                <span>#MensHaircutChicago</span>
                <span>#MobileBarberChicago</span>
                <span>#EuropeanHaircut</span>
                <span>#RiverNorthBarber</span>
                <span>#WestLoopBarber</span>
                <span>#LincolnParkBarber</span>
                <span>#CashAppMuahz26</span>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right">
              <button
                onClick={onOpenBookingWithHouseCall}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Schedule Chicago House Call</span>
              </button>
              <div className="text-[11px] text-neutral-500 font-mono mt-2">
                +$20 Travel Fee · Cash App Deposit: {BARBER_CONTACT.cashAppTag}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
