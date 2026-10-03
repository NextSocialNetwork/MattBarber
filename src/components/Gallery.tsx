import React, { useState } from 'react';
import { Scissors } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface GalleryProps {
  currentLang: Language;
  onSelectService: (serviceId: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang, onSelectService }) => {
  const t = TRANSLATIONS[currentLang];
  const [activeFilter, setActiveFilter] = useState<'all' | 'scissor' | 'fades' | 'beards'>('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Young European Textured Scissor Crop',
      category: 'scissor',
      description: 'Precision scissor-over-comb crop with soft temple taper. Tailored for straight & wavy European hair textures.',
      image: '/src/assets/images/young_european_scissor_1790996977542.jpg',
      serviceId: 'haircut',
    },
    {
      id: 2,
      title: 'Beard Trim Up & Razor Shave',
      category: 'beards',
      description: 'Razor-sharp cheek lines, sculpted jawline, and natural mustache blend with soothing tonic finish.',
      image: '/src/assets/images/young_european_beard_1790996986785.jpg',
      serviceId: 'beard',
    },
    {
      id: 3,
      title: 'Modern Low Skin Fade & Texture',
      category: 'fades',
      description: 'Clean European skin taper blending into a textured scissor-cut top with natural movement.',
      image: '/src/assets/images/young_european_fade_1790996996096.jpg',
      serviceId: 'haircut',
    },
    {
      id: 4,
      title: 'Master Scissor Detailing in Chair',
      category: 'scissor',
      description: 'Japanese steel shears crafted to natural hair swirl and skull shape with millimeter accuracy.',
      image: '/src/assets/images/young_european_barber_client_1790997006224.jpg',
      serviceId: 'combo',
    },
    {
      id: 5,
      title: 'European Textured Fringe & Low Taper',
      category: 'scissor',
      description: 'Modern youthful European aesthetic with natural scissor layering and clean neckline finish.',
      image: '/src/assets/images/hero_young_european_1790996968145.jpg',
      serviceId: 'haircut',
    },
    {
      id: 6,
      title: 'VIP Mobile Grooming Station',
      category: 'scissor',
      description: 'Cordless clippers, sanitized shears, and luxury tonics brought directly to your Chicago residence.',
      image: '/src/assets/images/mobile_barber_gear_1790944560477.jpg',
      serviceId: 'combo',
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
              {t.gallery.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 font-display">
              {t.gallery.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl leading-relaxed">
              {t.gallery.desc}
            </p>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-neutral-800 text-amber-400 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {t.gallery.all}
            </button>
            <button
              onClick={() => setActiveFilter('scissor')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'scissor'
                  ? 'bg-neutral-800 text-amber-400 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {t.gallery.scissor}
            </button>
            <button
              onClick={() => setActiveFilter('fades')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'fades'
                  ? 'bg-neutral-800 text-amber-400 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {t.gallery.fades}
            </button>
            <button
              onClick={() => setActiveFilter('beards')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'beards'
                  ? 'bg-neutral-800 text-amber-400 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {t.gallery.beards}
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 flex flex-col justify-between transition-all duration-300 shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-neutral-100 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectService(item.serviceId)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 hover:text-amber-400 flex items-center justify-center gap-2 border border-neutral-700 transition-colors cursor-pointer"
                >
                  <Scissors className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.gallery.bookStyle}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
