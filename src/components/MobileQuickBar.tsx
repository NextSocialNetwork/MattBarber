import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { BARBER_CONTACT } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface MobileQuickBarProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ currentLang, onOpenBooking }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BARBER_CONTACT.phoneRaw}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.footer.callMatt}</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-[2] py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-neutral-950" />
          <span>{t.nav.bookNow} ($25)</span>
        </button>
      </div>
    </div>
  );
};
