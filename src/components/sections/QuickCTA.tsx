import { motion } from 'framer-motion';
import { ToothOutline, DentalHygieneOutline } from 'healthicons-react';
import { CalendarBlank, WarningCircle, ArrowRight } from '@phosphor-icons/react';

const cards = [
  {
    id: 'appointment',
    icon: <CalendarBlank size={28} weight="duotone" />,
    accentColor: '#0B9FAA',
    bgIcon: '#E0F5F7',
    title: 'Buat Janji Online',
    desc: 'Pilih dokter & jadwal yang sesuai. Konfirmasi dalam 1 jam kerja.',
    cta: 'Book Sekarang',
    href: '#booking',
  },
  {
    id: 'emergency',
    icon: <WarningCircle size={28} weight="duotone" />,
    accentColor: '#F5A623',
    bgIcon: '#FFF8ED',
    title: 'Emergency Gigi',
    desc: 'Sakit gigi mendadak? Walk-in same day tersedia di semua cabang.',
    cta: 'Hubungi Sekarang',
    href: 'https://wa.me/6281234567890',
  },
  {
    id: 'checkup',
    icon: <DentalHygieneOutline width={28} height={28} />,
    accentColor: '#2EB87A',
    bgIcon: '#EDFBF4',
    title: 'Pemeriksaan Rutin',
    desc: 'MCU gigi setiap 6 bulan. Cegah masalah sebelum jadi lebih besar.',
    cta: 'Jadwalkan MCU',
    href: '#booking',
  },
];

export default function QuickCTA() {
  return (
    <section className="bg-[#E0F5F7] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 0 0.5px rgba(10,61,69,0.12), 0 4px 20px rgba(10,61,69,0.12)' }}
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 border border-[#D6E4E6] shadow-[0_0_0.5px_rgba(10,61,69,0.08),_0_2px_8px_rgba(10,61,69,0.06)] cursor-pointer"
              style={{ borderTop: `4px solid ${card.accentColor}` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: card.bgIcon, color: card.accentColor }}
              >
                {card.icon}
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-display font-bold text-[#1A2E35] text-xl">{card.title}</h3>
                <p className="font-body text-[#4A5A60] text-sm leading-relaxed">{card.desc}</p>
              </div>

              <a
                href={card.href}
                className="inline-flex items-center gap-2 font-semibold text-sm no-underline transition-colors duration-200 group"
                style={{ color: card.accentColor }}
              >
                {card.cta}
                <ArrowRight
                  size={16} weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
