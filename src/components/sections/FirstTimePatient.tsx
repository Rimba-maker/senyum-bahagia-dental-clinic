import { motion } from 'framer-motion';

const steps = [
  {
    num: '1',
    icon: '📅',
    title: 'Book Online / Walk-in',
    desc: 'Pilih dokter & jadwal favorit Anda secara online, atau langsung datang ke cabang terdekat.',
  },
  {
    num: '2',
    icon: '🤝',
    title: 'Konsultasi & Anamnesa',
    desc: 'Dokter mendengarkan keluhan Anda, riwayat medis, dan menjawab semua pertanyaan dengan sabar.',
  },
  {
    num: '3',
    icon: '🔍',
    title: 'Pemeriksaan & X-Ray',
    desc: 'Pemeriksaan klinis menyeluruh + rontgen digital jika diperlukan. Aman, cepat, dan minim radiasi.',
  },
  {
    num: '4',
    icon: '📋',
    title: 'Treatment Plan',
    desc: 'Dokter menjelaskan diagnosis, semua opsi treatment, timeline, dan estimasi biaya secara transparan.',
  },
];

const tips = [
  'Bawa kartu identitas (KTP / Paspor)',
  'Sikat gigi sebelum datang',
  'Untuk pasien BPJS: bawa rujukan dari FKTP',
  'Kosongkan waktu 30–60 menit untuk konsultasi pertama',
  'Boleh ajak keluarga / pendamping jika perlu',
];

export default function FirstTimePatient() {
  return (
    <section className="bg-[#E0F5F7] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0B9FAA] bg-white px-4 py-1.5 rounded-full mb-4">
            Pasien Baru
          </span>
          <h2 className="font-display font-bold text-[#1A2E35] leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Begini Prosesnya
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute left-5 top-5 bottom-5 w-0.5 bg-[#0B9FAA] origin-top"
              style={{ marginLeft: '21px' }}
            />

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.15 }}
                  className="flex gap-6 items-start"
                >
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-[#0B9FAA] flex items-center justify-center shadow-[0_4px_12px_rgba(11,159,170,0.35)]">
                    <span className="font-display font-bold text-white text-base">{step.num}</span>
                  </div>
                  {/* Content */}
                  <div className="pt-1 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl" aria-hidden="true">{step.icon}</span>
                      <h3 className="font-display font-semibold text-[#1A2E35] text-lg">{step.title}</h3>
                    </div>
                    <p className="font-body text-[#4A5A60] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tips box */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="bg-white rounded-2xl border-l-4 border-[#0B9FAA] border border-[#D6E4E6] shadow-[0_0_0.5px_rgba(10,61,69,0.08),_0_2px_8px_rgba(10,61,69,0.06)] p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#E0F5F7] flex items-center justify-center text-xl">
                💡
              </div>
              <h3 className="font-display font-semibold text-[#1A2E35] text-lg">Tips Persiapan</h3>
            </div>

            <ul className="flex flex-col gap-3.5">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#0B9FAA] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="font-body text-[#4A5A60] text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-6 border-t border-[#EBF4F5]">
              <p className="font-body text-[#8A9EA5] text-xs mb-4">Siap untuk mulai?</p>
              <a
                href="#booking"
                className="flex items-center justify-center gap-2 w-full bg-[#0B9FAA] text-white font-semibold text-sm py-3 rounded-full hover:bg-[#0A3D45] transition-colors duration-200 active:scale-[0.97] no-underline"
              >
                Book Konsultasi Pertama
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
