import { motion } from 'framer-motion';
import { Clock, ArrowRight } from '@phosphor-icons/react';

const dentists = [
  { name: 'drg. Sari Wulandari, Sp.KGA', specialty: 'Gigi Anak (Pediatric)', schedule: 'Senin, Rabu, Jumat', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' },
  { name: 'drg. Bayu Pratama, Sp.Ort', specialty: 'Ortodonti (Behel)', schedule: 'Selasa, Kamis, Sabtu', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80' },
  { name: 'drg. Rina Setiawati, Sp.KG', specialty: 'Konservasi & Root Canal', schedule: 'Senin – Jumat', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { name: 'drg. Daniel Hartono, Sp.BM', specialty: 'Bedah Mulut', schedule: 'Selasa, Kamis', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80' },
  { name: 'drg. Nina Wijaya, Sp.Pros', specialty: 'Prostodonti & Implant', schedule: 'Senin, Rabu, Sabtu', image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80' },
  { name: 'drg. Andre Kusuma', specialty: 'Cosmetic Dentistry', schedule: 'Setiap hari kecuali Minggu', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80' },
  { name: 'drg. Maya Indriani, Sp.Perio', specialty: 'Periodonti (Gusi)', schedule: 'Rabu, Jumat, Sabtu', image: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&q=80' },
  { name: 'drg. Reza Hartanto', specialty: 'General · English Speaking', schedule: 'Senin – Sabtu', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80' },
];

export default function Dentists() {
  return (
    <section id="dokter" className="bg-[#F5F1EC] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0B9FAA] bg-[#E0F5F7] px-4 py-1.5 rounded-full mb-4">
            Tim Kami
          </span>
          <h2 className="font-display font-bold text-[#1A2E35] mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Tim Dokter Gigi Kami
          </h2>
          <p className="font-body text-[#4A5A60] text-lg max-w-xl mx-auto leading-relaxed">
            Bersertifikat, berpengalaman, dan sabar — bahkan dengan pasien yang takut.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {dentists.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: (i % 4) * 0.08 }}
              className="group bg-white rounded-xl border border-[#D6E4E6] shadow-[0_0_0.5px_rgba(10,61,69,0.08),_0_2px_8px_rgba(10,61,69,0.06)] overflow-hidden"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src={doc.image} alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D45]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href="#booking"
                    className="w-full text-center bg-[#0B9FAA] text-white font-semibold text-xs py-2.5 rounded-full no-underline flex items-center justify-center gap-1.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Book dokter ini <ArrowRight size={12} weight="bold" />
                  </a>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-display font-semibold text-[#1A2E35] text-sm leading-snug">{doc.name}</h3>
                <span className="inline-block self-start bg-[#E0F5F7] text-[#0B9FAA] font-semibold text-xs px-2.5 py-1 rounded-full leading-none">
                  {doc.specialty}
                </span>
                <p className="font-body text-[#8A9EA5] text-xs flex items-center gap-1.5">
                  <Clock size={11} weight="bold" />
                  {doc.schedule}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
