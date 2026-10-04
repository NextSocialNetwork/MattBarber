import React, { useState, useRef, useEffect } from 'react';
import { Phone, Calendar, Clock, Globe, ChevronDown } from 'lucide-react';
import { BARBER_CONTACT } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenMyBookings: () => void;
  bookingCount: number;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  onOpenBooking,
  onOpenMyBookings,
  bookingCount,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 hover:text-amber-400 transition-colors font-display"
        >
          {BARBER_CONTACT.brandName}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a
            href="#services"
            className="hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            {t.nav.services}
          </a>
          <a
            href="#house-calls"
            className="hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            {t.nav.houseCalls}
          </a>
          <a
            href="#map"
            className="hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            {t.nav.map}
          </a>
          <a
            href="#gallery"
            className="hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            {t.nav.gallery}
          </a>
          <a
            href="#faq"
            className="hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            {t.nav.faq}
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions + Language Selector */}
        <div className="flex items-center gap-2.5">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 hover:text-white transition-colors cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentLangObj.flag}</span>
              <span className="font-mono uppercase">{currentLangObj.code}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl py-1 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 border-b border-neutral-800">
                  Select Language
                </div>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      onSelectLang(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-neutral-800/80 transition-colors cursor-pointer ${
                      currentLang === lang.code ? 'text-amber-400 font-bold bg-neutral-800/40' : 'text-neutral-300'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={`tel:${BARBER_CONTACT.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors whitespace-nowrap"
            title="Call Matt directly"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{BARBER_CONTACT.phone}</span>
          </a>

          {bookingCount > 0 && (
            <button
              onClick={onOpenMyBookings}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap"
            >
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.nav.myBookings} ({bookingCount})</span>
            </button>
          )}

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer active:scale-95"
          >
            <Calendar className="w-4 h-4 text-neutral-950" />
            <span>{t.nav.bookNow}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
