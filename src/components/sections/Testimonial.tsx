import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: 'Saya phobia dokter gigi sejak kecil. drg. Andre sabar banget, kasih sedasi sadar untuk extraction geraham bungsu. Sekarang gak takut lagi ke dokter gigi.',
    name: 'Maya',
    age: '28 tahun',
    treatment: 'Oral Surgery + Sedasi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    stars: 5,
  },
  {
    quote: 'Anak saya 5 tahun nangis setiap ke dokter gigi. Di sini ada playground, dokter giginya playful banget — anak jadi mau bahkan minta balik lagi.',
    name: 'Bu Sari',
    age: 'Ibu pasien anak',
    treatment: 'Pediatric Dentistry',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    stars: 5,
  },
  {
    quote: 'Pasang behel di sini 18 bulan, sekarang gigi rapi banget. Worth it banget, dokter ortonya selalu jelas explain progresnya di setiap kontrol.',
    name: 'Andini',
    age: '23 tahun',
    treatment: 'Ortodonti Behel',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    stars: 5,
  },
  {
    quote: 'Implant single tooth setelah cabut geraham bungsu. Prosesnya minim nyeri, hasilnya natural banget. Sudah 2 tahun tidak ada masalah sama sekali.',
    name: 'Pak Bambang',
    age: '52 tahun',
    treatment: 'Dental Implant',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    stars: 5,
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate 8s
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active]!;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0B9FAA] bg-[#E0F5F7] px-4 py-1.5 rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="font-display font-bold text-[#1A2E35] leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Cerita Senyum Pasien Kami
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="bg-white rounded-3xl border border-[#D6E4E6] shadow-[0_0_0.5px_rgba(10,61,69,0.12),_0_4px_20px_rgba(10,61,69,0.10)] p-10 lg:p-14"
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-[#0B9FAA] mb-6 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <p className="font-body text-[#1A2E35] text-xl leading-[1.8] italic mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-[#EBF4F5] pt-6">
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#E0F5F7]"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-display font-semibold text-[#1A2E35] text-base">{t.name}</p>
                    <p className="font-body text-[#8A9EA5] text-sm">{t.age}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-0.5 justify-end mb-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>
                  <span className="inline-block bg-[#E0F5F7] text-[#0B9FAA] font-semibold text-xs px-2.5 py-1 rounded-full">
                    {t.treatment}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#D6E4E6] shadow-[0_2px_8px_rgba(10,61,69,0.10)] flex items-center justify-center hover:border-[#0B9FAA] hover:text-[#0B9FAA] text-[#4A5A60] transition-all duration-200 active:scale-95"
            aria-label="Testimoni sebelumnya"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#D6E4E6] shadow-[0_2px_8px_rgba(10,61,69,0.10)] flex items-center justify-center hover:border-[#0B9FAA] hover:text-[#0B9FAA] text-[#4A5A60] transition-all duration-200 active:scale-95"
            aria-label="Testimoni berikutnya"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === active ? '28px' : '8px',
                backgroundColor: i === active ? '#0B9FAA' : '#D6E4E6',
              }}
              aria-label={`Testimoni ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
