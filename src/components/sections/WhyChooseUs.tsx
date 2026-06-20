import { motion } from 'framer-motion';
import { UsersThree, ShieldCheck, CreditCard, Globe, Syringe, Heart } from '@phosphor-icons/react';

const usps = [
  {
    icon: <Heart size={32} weight="duotone" color="#0B9FAA" />,
    title: 'Dental Phobia Friendly',
    desc: 'Tim kami terlatih khusus untuk pasien yang takut ke dokter gigi. Kami sabar, tidak pernah terburu-buru.',
    accent: '#0B9FAA',
  },
  {
    icon: <Syringe size={32} weight="duotone" color="#5DB8A6" />,
    title: 'Painless Procedure',
    desc: 'Anestesi modern + sedasi sadar tersedia untuk prosedur kompleks. Tidak perlu menahan rasa sakit.',
    accent: '#5DB8A6',
  },
  {
    icon: <UsersThree size={32} weight="duotone" color="#0B9FAA" />,
    title: 'Family-Friendly',
    desc: 'Dokter gigi anak bersertifikat, ruang tunggu dengan playground, dan pendekatan yang menyenangkan untuk si kecil.',
    accent: '#0B9FAA',
  },
  {
    icon: <ShieldCheck size={32} weight="duotone" color="#5DB8A6" />,
    title: 'Sterilisasi Hospital-Grade',
    desc: 'Autoclave 121°C dan single-use items untuk setiap prosedur. Higienitas setara standar rumah sakit.',
    accent: '#5DB8A6',
  },
  {
    icon: <CreditCard size={32} weight="duotone" color="#0B9FAA" />,
    title: 'Cicilan 0% Tersedia',
    desc: 'Treatment di atas Rp 5 jt bisa dicicil 0% 6 bulan via Mandiri & BCA credit card. Senyum sehat, dompet tetap aman.',
    accent: '#0B9FAA',
  },
  {
    icon: <Globe size={32} weight="duotone" color="#5DB8A6" />,
    title: 'English & Mandarin Speaking',
    desc: 'Tersedia dokter gigi yang fasih berbahasa Inggris dan Mandarin untuk pasien asing & ekspat di Jakarta.',
    accent: '#5DB8A6',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F5F1EC] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0B9FAA] bg-[#E0F5F7] px-4 py-1.5 rounded-full mb-4">
            Keunggulan Kami
          </span>
          <h2 className="font-display font-bold text-[#1A2E35] mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Kenapa Pasien Pilih Kami
          </h2>
          <p className="font-body text-[#4A5A60] text-lg max-w-xl mx-auto leading-relaxed">
            Bukan sekadar klinik — kami partner kesehatan gigi keluarga Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 0 0.5px rgba(10,61,69,0.12), 0 4px 20px rgba(10,61,69,0.10)' }}
              className="bg-white rounded-xl p-7 border border-[#D6E4E6] shadow-[0_0_0.5px_rgba(10,61,69,0.08),_0_2px_8px_rgba(10,61,69,0.06)]"
              style={{ borderLeft: `4px solid ${usp.accent}` }}
            >
              <div className="mb-4">{usp.icon}</div>
              <h3 className="font-display font-semibold text-[#1A2E35] text-lg mb-2">{usp.title}</h3>
              <p className="font-body text-[#4A5A60] text-sm leading-relaxed">{usp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
