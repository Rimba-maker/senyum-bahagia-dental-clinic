import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CaretDown, WhatsappLogo } from '@phosphor-icons/react';

const faqs = [
  { q: 'Apakah cabut gigi itu sakit?', a: 'Dengan anestesi lokal modern, prosedur pencabutan hampir tidak terasa nyeri sama sekali. Mungkin ada sedikit tekanan, tapi tidak ada rasa sakit yang signifikan. Untuk pasien yang sangat cemas, sedasi sadar tersedia.' },
  { q: 'Behel / kawat gigi dipasang berapa lama?', a: 'Rata-rata 18–24 bulan, tergantung kompleksitas kasus. Damon system (self-ligating) bisa lebih cepat 6–12 bulan dibanding behel konvensional. Invisalign bervariasi dari 6 bulan hingga 2 tahun.' },
  { q: 'Apakah bleaching aman untuk gigi?', a: 'Bleaching yang dilakukan oleh dokter gigi profesional sangat aman. Yang perlu dihindari adalah produk bleaching dari pasar atau home-kit tanpa pengawasan dokter, karena konsentrasinya tidak terkontrol dan bisa merusak email gigi.' },
  { q: 'Implant atau gigi palsu lepasan, mana yang lebih baik?', a: 'Implant lebih natural, permanen, dan tidak mempengaruhi gigi tetangga — tapi memerlukan investasi lebih besar. Gigi palsu lepasan lebih terjangkau tapi perlu dirawat ekstra. Konsultasikan dengan dokter prostodonti kami untuk rekomendasi yang paling sesuai kondisi Anda.' },
  { q: 'Anak umur berapa sebaiknya pertama ke dokter gigi?', a: 'Idealnya saat gigi pertama tumbuh, sekitar usia 1 tahun. Kunjungan pertama ini untuk pemeriksaan, edukasi kebersihan gigi, dan membiasakan anak dengan suasana klinik — bukan untuk langsung treatment. Lebih awal lebih baik.' },
  { q: 'Apakah BPJS bisa digunakan di sini?', a: 'Ya, kami BPJS friendly. BPJS menanggung treatment dasar seperti scaling sederhana, pencabutan, dan tambal gigi. Treatment seperti behel, veneer, implant, dan bleaching tidak ditanggung BPJS dan merupakan biaya pribadi. Bawa rujukan dari FKTP untuk treatment BPJS.' },
  { q: 'Apakah bisa cicilan untuk treatment besar?', a: 'Bisa! Tersedia cicilan 0% hingga 6 bulan via Mandiri dan BCA credit card untuk treatment di atas Rp 5 juta. Hubungi kami untuk informasi lebih lengkap tentang opsi pembayaran.' },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-xl border overflow-hidden transition-colors duration-200" style={{ borderColor: isOpen ? '#0B9FAA' : '#D6E4E6' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left bg-white hover:bg-[#F5F1EC] transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-base leading-snug transition-colors duration-200" style={{ color: isOpen ? '#0B9FAA' : '#1A2E35' }}>
          {q}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <CaretDown size={20} weight="bold" color={isOpen ? '#0B9FAA' : '#8A9EA5'} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 lg:px-6 pb-5 lg:pb-6 bg-white">
              <div className="h-px bg-[#EBF4F5] mb-4" />
              <p className="font-body text-[#4A5A60] text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F5F1EC] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0B9FAA] bg-[#E0F5F7] px-4 py-1.5 rounded-full mb-4">FAQ</span>
            <h2 className="font-display font-bold text-[#1A2E35] leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Pertanyaan Sering Ditanyain
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.06 }}
              >
                <FAQItem
                  q={faq.q} a={faq.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="text-center mt-10"
          >
            <p className="font-body text-[#8A9EA5] text-sm mb-4">Masih ada pertanyaan?</p>
            <a
              href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2EB87A] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#259966] transition-colors duration-200 active:scale-[0.97] no-underline"
            >
              <WhatsappLogo size={18} weight="fill" />
              Tanya via WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
