import { motion } from 'framer-motion';
import { ToothOutline, DentalHygieneOutline, StethoscopeOutline } from 'healthicons-react';
import { CalendarBlank, ArrowRight, MapPin, ShieldCheck, UsersThree } from '@phosphor-icons/react';

const warmFade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.15 },
  }),
};

const trustBadges = [
  { icon: <ToothOutline width={18} height={18} />, text: '5.000+ Pasien Bahagia' },
  { icon: <StethoscopeOutline width={18} height={18} />, text: '20+ Dokter Spesialis' },
  { icon: <MapPin size={16} weight="fill" />, text: '5 Cabang Jabodetabek' },
  { icon: <ShieldCheck size={16} weight="fill" />, text: 'BPJS Friendly' },
];

export default function Hero() {
  return (
    <section id="beranda" className="bg-[#F5F1EC] min-h-[85vh] flex items-center py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <motion.span
              custom={0} initial="hidden" animate="visible" variants={warmFade}
              className="inline-flex items-center gap-2 text-[#0B9FAA] text-xs font-semibold tracking-widest uppercase w-fit bg-[#E0F5F7] px-4 py-1.5 rounded-full"
            >
              <DentalHygieneOutline width={16} height={16} />
              Klinik Gigi Modern · Jakarta & Tangerang
            </motion.span>

            <motion.h1
              custom={1} initial="hidden" animate="visible" variants={warmFade}
              className="font-display font-bold text-[#1A2E35] leading-[1.1] tracking-[-0.5px]"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
            >
              Pulihkan Senyum{' '}
              <span className="text-[#0B9FAA]">Yang Hilang.</span>
              <br />Tanpa Rasa Takut.
            </motion.h1>

            <motion.p
              custom={2} initial="hidden" animate="visible" variants={warmFade}
              className="font-body text-[#4A5A60] text-lg leading-[1.7] max-w-lg"
            >
              Klinik gigi modern dengan teknologi digital scanner, sedasi sadar, dan tim dokter yang sabar — bahkan untuk pasien yang dental-phobia.
            </motion.p>

            <motion.div
              custom={3} initial="hidden" animate="visible" variants={warmFade}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-[#0B9FAA] text-white font-semibold text-base px-8 py-[14px] rounded-full hover:bg-[#0A3D45] transition-colors duration-200 active:scale-[0.97] no-underline shadow-[0_4px_16px_rgba(11,159,170,0.3)]"
              >
                <CalendarBlank size={18} weight="bold" />
                Book Konsultasi Gratis
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#0B9FAA] text-[#0B9FAA] font-semibold text-base px-8 py-[14px] rounded-full hover:bg-[#E0F5F7] transition-colors duration-200 active:scale-[0.97] no-underline"
              >
                Lihat Treatment
                <ArrowRight size={16} weight="bold" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              custom={4} initial="hidden" animate="visible" variants={warmFade}
              className="flex flex-wrap gap-3 pt-2"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white border border-[#D6E4E6] px-4 py-2 rounded-full shadow-[0_1px_4px_rgba(10,61,69,0.06)] text-[#0B9FAA]"
                >
                  {badge.icon}
                  <span className="font-body font-medium text-[#1A2E35] text-xs whitespace-nowrap">
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[24px] overflow-hidden shadow-[0_4px_32px_rgba(10,61,69,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85"
                alt="Pasien tersenyum bersama dokter gigi di Senyum Bahagia Dental Clinic"
                width={800} height={600}
                className="w-full h-[520px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D45]/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge — pasien */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-[0_8px_24px_rgba(10,61,69,0.15)] p-4 flex items-center gap-3 border border-[#D6E4E6]"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[#E0F5F7] border-2 border-white flex items-center justify-center">
                    <UsersThree size={14} color="#0B9FAA" weight="fill" />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-display font-bold text-[#1A2E35] text-sm">5.000+ Pasien</div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 256 256" fill="#F5A623">
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34l13.49-58.54-45.11-39.42a16,16,0,0,1,9.12-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0L191,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"/>
                    </svg>
                  ))}
                  <span className="font-body text-[#8A9EA5] text-xs ml-1">5.0</span>
                </div>
              </div>
            </motion.div>

            {/* Floating BPJS badge */}
            <motion.div
              initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
              className="absolute top-4 -right-4 bg-[#0B9FAA] text-white rounded-2xl shadow-[0_8px_24px_rgba(11,159,170,0.4)] px-4 py-2.5"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} weight="fill" color="white" />
                <div className="font-display font-bold text-sm">BPJS</div>
              </div>
              <div className="font-body text-white/80 text-xs">Friendly</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
