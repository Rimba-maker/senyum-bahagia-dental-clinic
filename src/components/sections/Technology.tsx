import { motion } from 'framer-motion';
import { XrayOutline, UltrasoundScannerOutline } from 'healthicons-react';
import { Sun, Coffee, Desktop } from '@phosphor-icons/react';

const techs = [
  {
    icon: <XrayOutline width={32} height={32} />,
    name: 'Digital X-Ray',
    desc: '80% kurang radiasi dibanding X-Ray konvensional. Hasil instan, akurat, aman.',
    badge: '80% less radiation',
  },
  {
    icon: <UltrasoundScannerOutline width={32} height={32} />,
    name: 'Intraoral Scanner',
    desc: 'Tidak perlu cetakan gigi yang tidak nyaman. Scan digital 3D dalam 2 menit.',
    badge: 'No impression needed',
  },
  {
    icon: <Sun size={32} weight="duotone" />,
    name: 'Laser Dentistry',
    desc: 'Treatment gusi dan whitening lebih cepat, presisi, dan minim nyeri tanpa pisau bedah.',
    badge: 'Minim nyeri',
  },
  {
    icon: <Coffee size={32} weight="duotone" />,
    name: 'Sedasi Sadar',
    desc: 'Conscious sedation untuk pasien dental phobia atau prosedur panjang. Tetap sadar, tetap nyaman.',
    badge: 'Dental phobia friendly',
  },
  {
    icon: <Desktop size={32} weight="duotone" />,
    name: 'CAD/CAM Same-Day Crown',
    desc: 'Crown jadi dalam 1 kunjungan dengan teknologi digital milling. Tidak perlu bolak-balik.',
    badge: 'Selesai 1 hari',
  },
];

export default function Technology() {
  return (
    <section id="teknologi" className="bg-[#0A3D45] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#4AABB5] bg-white/10 px-4 py-1.5 rounded-full mb-4">
            Teknologi
          </span>
          <h2 className="font-display font-bold text-white mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Teknologi Modern, Treatment Presisi
          </h2>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Peralatan terkini untuk hasil terbaik dan pengalaman yang lebih nyaman.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.1 }}
              whileHover={{ backgroundColor: 'rgba(11,159,170,0.15)', borderColor: 'rgba(11,159,170,0.4)' }}
              className="rounded-xl p-6 flex flex-col gap-4 border border-white/10 bg-white/5 cursor-default"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
                className="text-[#4AABB5] w-12 h-12 flex items-center justify-center rounded-xl bg-white/8"
              >
                {tech.icon}
              </motion.div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display font-semibold text-white text-base">{tech.name}</h3>
                <p className="font-body text-white/65 text-sm leading-relaxed">{tech.desc}</p>
              </div>

              <span className="inline-block self-start bg-[#0B9FAA] text-white font-semibold text-xs px-3 py-1 rounded-full mt-auto">
                {tech.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
