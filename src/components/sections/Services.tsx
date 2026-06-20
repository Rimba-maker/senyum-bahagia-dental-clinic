import { motion } from 'framer-motion';
import {
  ToothOutline, MouthOutline, DentalHygieneOutline,
  OdontologyImplantOutline, GeneralSurgeryOutline,
  XrayOutline, StethoscopeOutline,
} from 'healthicons-react';
import { ArrowRight, Check } from '@phosphor-icons/react';

const ChildIcon = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M24 6C20.7 6 18 8.7 18 12s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-8 14c-2.2 0-4 1.8-4 4v8c0 1.1.9 2 2 2h1v10h18V34h1c1.1 0 2-.9 2-2v-8c0-2.2-1.8-4-4-4H16z"/>
  </svg>
);

const ToothIcon = () => <ToothOutline width={22} height={22} />;
const MouthIcon = () => <MouthOutline width={22} height={22} />;
const HygieneIcon = () => <DentalHygieneOutline width={22} height={22} />;
const ImplantIcon = () => <OdontologyImplantOutline width={22} height={22} />;
const SurgeryIcon = () => <GeneralSurgeryOutline width={22} height={22} />;
const XrayIcon = () => <XrayOutline width={22} height={22} />;
const StethIcon = () => <StethoscopeOutline width={22} height={22} />;

const services = [
  {
    id: 'general',
    Icon: StethIcon,
    name: 'General Dentistry',
    items: ['Pemeriksaan rutin & scaling', 'Tambal gigi composite', 'Pencabutan gigi'],
    price: 'Mulai Rp 250k',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
  },
  {
    id: 'cosmetic',
    Icon: MouthIcon,
    name: 'Cosmetic Dentistry',
    items: ['Veneer porcelain & composite', 'Bleaching / whitening', 'Smile makeover'],
    price: 'Mulai Rp 1.5 jt',
    image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=600&q=80',
  },
  {
    id: 'ortho',
    Icon: ToothIcon,
    name: 'Orthodontic (Behel)',
    items: ['Behel metal & ceramic', 'Damon system', 'Invisalign / clear aligner'],
    price: 'Mulai Rp 8 jt',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
  },
  {
    id: 'endo',
    Icon: XrayIcon,
    name: 'Endodontic (Root Canal)',
    items: ['Perawatan saraf gigi', 'Pasak & inlay', 'Rotary endodontic system'],
    price: 'Mulai Rp 2 jt',
    image: 'https://images.unsplash.com/photo-1606811951341-756fdd437682?w=600&q=80',
  },
  {
    id: 'perio',
    Icon: HygieneIcon,
    name: 'Periodontic (Gusi)',
    items: ['Treatment gusi bengkak', 'Bedah periodontal', 'Bone grafting'],
    price: 'Mulai Rp 1.5 jt',
    image: 'https://images.unsplash.com/photo-1609840113564-ab4aba4956c4?w=600&q=80',
  },
  {
    id: 'prostho',
    Icon: ImplantIcon,
    name: 'Prosthodontic',
    items: ['Crown & bridge', 'Denture (lepasan)', 'All-on-4 / all-on-6 implant'],
    price: 'Mulai Rp 3 jt',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
  },
  {
    id: 'surgery',
    Icon: SurgeryIcon,
    name: 'Oral Surgery',
    items: ['Pencabutan gigi bungsu', 'Implant gigi', 'Cyst removal'],
    price: 'Mulai Rp 2 jt',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
  },
  {
    id: 'pediatric',
    Icon: ChildIcon,
    name: 'Pediatric Dentistry',
    items: ['Khusus anak 3–12 tahun', 'Fluoride & sealant', 'Ruang tunggu khusus anak'],
    price: 'Mulai Rp 200k',
    image: 'https://images.unsplash.com/photo-1631051103633-24959376b92d?w=600&q=80',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0B9FAA] bg-[#E0F5F7] px-4 py-1.5 rounded-full mb-4">
            Layanan Kami
          </span>
          <h2 className="font-display font-bold text-[#1A2E35] mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Layanan Lengkap Untuk Senyum Anda
          </h2>
          <p className="font-body text-[#4A5A60] text-lg max-w-2xl mx-auto leading-relaxed">
            Dari pemeriksaan rutin sampai smile makeover — semua di bawah satu atap.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: (i % 4) * 0.08 }}
              whileHover={{ y: -5, boxShadow: '0 0 0.5px rgba(10,61,69,0.12), 0 4px 20px rgba(10,61,69,0.12)' }}
              className="group bg-white rounded-xl border border-[#D6E4E6] shadow-[0_0_0.5px_rgba(10,61,69,0.08),_0_2px_8px_rgba(10,61,69,0.06)] overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="overflow-hidden h-40">
                <img
                  src={service.image} alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80'; }}
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2 text-[#0B9FAA]">
                  <service.Icon />
                  <h3 className="font-display font-semibold text-[#1A2E35] text-base leading-snug">{service.name}</h3>
                </div>

                <ul className="flex flex-col gap-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={13} weight="bold" className="text-[#0B9FAA] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-[#4A5A60] text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-3 flex items-center justify-between border-t border-[#EBF4F5]">
                  <span className="inline-block font-semibold text-xs text-[#0B9FAA] bg-[#E0F5F7] px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                  <span className="font-body text-[#0B9FAA] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                    Detail <ArrowRight size={12} weight="bold" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-body text-[#8A9EA5] text-sm mb-5">Tidak yakin treatment mana yang tepat?</p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-[#0B9FAA] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#0A3D45] transition-colors duration-200 active:scale-[0.97] no-underline shadow-[0_4px_16px_rgba(11,159,170,0.25)]"
          >
            Konsultasi Gratis Dulu
            <ArrowRight size={16} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
