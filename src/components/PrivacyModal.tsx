import React from 'react';
import { X, ShieldCheck, Lock, MapPin, DollarSign, Mail } from 'lucide-react';
import { BARBER_CONTACT } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-xs font-mono text-amber-400 font-bold flex items-center gap-1.5">
                <span>The Goat Cuts 🐐</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400">{BARBER_CONTACT.website}</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-100 font-display">
                {t.footer.privacyPolicy} & Terms
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <h4 className="font-bold text-neutral-100 flex items-center gap-2 text-sm font-display">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>1. Information Collection & Client Privacy</span>
            </h4>
            <p className="text-neutral-400 text-xs">
              Matt Cuts Chicago collects client contact information (Full Name, Phone Number, and Email Address)
              strictly for the purpose of scheduling, managing, and confirming barber appointments. We respect
              your personal privacy and do not sell, rent, or share personal client records with any third-party marketing services.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <h4 className="font-bold text-neutral-100 flex items-center gap-2 text-sm font-display">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>2. Residential Address Usage (Chicago House Calls)</span>
            </h4>
            <p className="text-neutral-400 text-xs">
              When booking a mobile house call within Chicago city, you provide a street address and apartment number.
              This information is used solely by Master Barber Matt to navigate to your location at the designated time slot.
              Address details are treated with strict confidentiality.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <h4 className="font-bold text-neutral-100 flex items-center gap-2 text-sm font-display">
              <DollarSign className="w-4 h-4 text-amber-400" />
              <span>3. Cash App Security Deposit Policy ($Muahz26)</span>
            </h4>
            <p className="text-neutral-400 text-xs">
              House call appointments require an instant $20 security deposit sent to Cash App tag{' '}
              <strong className="text-white font-mono">{BARBER_CONTACT.cashAppTag}</strong>.
              This deposit protects dedicated travel time across Chicago traffic and is credited directly
              toward your total service charge upon completion. Cancellations made with at least 4 hours advance notice
              allow the deposit to transfer to a rescheduled date.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <h4 className="font-bold text-neutral-100 flex items-center gap-2 text-sm font-display">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>4. Sanitation & Equipment Standards</span>
            </h4>
            <p className="text-neutral-400 text-xs">
              Every appointment adheres to strict hygiene standards. Shears, clipper blades, guards, and straight razors
              are sanitized with hospital-grade disinfectant spray and Barbicide between every client. Fresh disposable neck strips,
              sanitized capes, and protective floor covers are utilized for all in-chair and mobile visits.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <h4 className="font-bold text-neutral-100 flex items-center gap-2 text-sm font-display">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>5. Questions & Contact</span>
            </h4>
            <p className="text-neutral-400 text-xs">
              For any questions regarding your booking, cancellations, or privacy rights, contact Matt directly at{' '}
              <a href={`mailto:${BARBER_CONTACT.email}`} className="text-amber-400 underline font-mono">
                {BARBER_CONTACT.email}
              </a>{' '}
              or call/text{' '}
              <a href={`tel:${BARBER_CONTACT.phoneRaw}`} className="text-amber-400 underline font-mono">
                {BARBER_CONTACT.phone}
              </a>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            {t.booking.doneClose}
          </button>
        </div>
      </div>
    </div>
  );
};
