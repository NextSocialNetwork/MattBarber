import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface ReviewsProps {
  currentLang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
            {t.reviews.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 font-display">
            {t.reviews.title}
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            {t.reviews.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <div className="font-bold text-sm text-neutral-100 font-display">
                  {review.name}
                </div>
                <div className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{review.neighborhood}</span>
                </div>
                <div className="text-[11px] font-mono text-amber-400/90 mt-1">
                  {review.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
