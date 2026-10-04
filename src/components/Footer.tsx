import React from 'react';
import { Phone, Mail, DollarSign, MapPin, Calendar, ShieldCheck, Lock, FileText, Globe } from 'lucide-react';
import { BARBER_CONTACT } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onSelectLang,
  onOpenBooking,
  onOpenPrivacy,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
      {/* Pre-footer Call to Action */}
      <div className="border-b border-neutral-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                <span>{BARBER_CONTACT.brandName}</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400">{BARBER_CONTACT.website}</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-100 font-display">
                {t.footer.readyTitle}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                $25 Haircut · $15 Beard Trimming · $25 Chicago House Calls · Cash App: {BARBER_CONTACT.cashAppTag}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BARBER_CONTACT.phoneRaw}`}
                className="px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-xs font-semibold text-neutral-200 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t.footer.callMatt}: {BARBER_CONTACT.phone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-neutral-950" />
                <span>{t.footer.bookOnline}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-lg font-bold text-neutral-100 font-display">
              {BARBER_CONTACT.brandName}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Specialized master barber in Chicago crafting European, straight, and wavy hair cuts,
              tapers, and clean razor beard trims. In-chair or mobile house calls in Chicago city.
            </p>
            <div className="text-xs font-mono text-neutral-500">
              Official: <span className="text-neutral-300">{BARBER_CONTACT.website}</span>
            </div>

            {/* Quick Language switch buttons */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-neutral-500 mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Languages / Kalbos / Języki / Языки / Idiomas:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {([
                  { code: 'en', flag: '🇺🇸' },
                  { code: 'lt', flag: '🇱🇹' },
                  { code: 'pl', flag: '🇵🇱' },
                  { code: 'ru', flag: '🇷🇺' },
                  { code: 'es', flag: '🇪🇸' },
                ] as { code: Language; flag: string }[]).map(({ code, flag }) => (
                  <button
                    key={code}
                    onClick={() => onSelectLang(code)}
                    className={`px-2 py-1 text-[11px] rounded font-mono uppercase cursor-pointer transition-colors flex items-center gap-1 ${
                      currentLang === code
                        ? 'bg-amber-400 text-neutral-950 font-bold'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>{flag}</span>
                    <span>{code}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-mono">
              Explore Links
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#house-calls" className="hover:text-amber-400 transition-colors">
                  {t.nav.houseCalls}
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-amber-400 transition-colors">
                  {t.nav.map}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-mono">
              {t.footer.directContact}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`tel:${BARBER_CONTACT.phoneRaw}`}
                  className="flex items-center gap-2 text-neutral-300 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{BARBER_CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BARBER_CONTACT.email}`}
                  className="flex items-center gap-2 text-neutral-300 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="break-all">{BARBER_CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>Chicago, IL (City limits)</span>
              </li>
              <li className="pt-1">
                <a
                  href={BARBER_CONTACT.cashAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:underline font-mono text-xs"
                >
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Cash App: {BARBER_CONTACT.cashAppTag}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-mono">
              Privacy & Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{t.footer.privacyPolicy}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{t.footer.termsOfService}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{t.footer.sanitation}</span>
                </button>
              </li>
              <li className="text-[11px] text-neutral-500 pt-2 font-mono">
                Cash App deposit required for all Chicago house calls.
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet copyright & bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {BARBER_CONTACT.brandName} · {BARBER_CONTACT.website}. {t.footer.allRightsReserved}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              {t.footer.privacyPolicy}
            </button>
            <span>·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              {t.footer.termsOfService}
            </button>
            <span>·</span>
            <span>{BARBER_CONTACT.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
