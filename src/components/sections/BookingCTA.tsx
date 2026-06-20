import { motion } from 'framer-motion';
import { useState } from 'react';
import { WhatsappLogo, CalendarBlank, Check } from '@phosphor-icons/react';

const treatments = ['Pemeriksaan & Konsultasi','Scaling / Pembersihan Karang','Tambal Gigi','Cabut Gigi','Root Canal (Saraf)','Behel / Orthodonti','Veneer & Cosmetic','Bleaching / Whitening','Implant Gigi','Gigi Palsu / Prosthodonti','Bedah Mulut','Gigi Anak','Lainnya'];
const doctors = ['Tidak ada preferensi','drg. Sari Wulandari, Sp.KGA (Anak)','drg. Bayu Pratama, Sp.Ort (Behel)','drg. Rina Setiawati, Sp.KG (Root Canal)','drg. Daniel Hartono, Sp.BM (Bedah Mulut)','drg. Nina Wijaya, Sp.Pros (Implant)','drg. Andre Kusuma (Cosmetic)','drg. Maya Indriani, Sp.Perio (Gusi)','drg. Reza Hartanto (General)'];
const branches = ['Kelapa Gading','Kuningan','BSD','Bintaro','Bekasi'];

export default function BookingCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', whatsapp: '', treatment: '', doctor: '', branch: '', date: '' });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const inputClass = "w-full bg-[#F5F1EC] border border-[#D6E4E6] rounded-lg px-4 py-3 font-body text-[#1A2E35] text-sm placeholder-[#8A9EA5] focus:outline-none focus:border-[#0B9FAA] focus:ring-2 focus:ring-[#0B9FAA]/15 transition-all duration-200";
  const labelClass = "font-body font-medium text-[#1A2E35] text-sm mb-1.5 block";

  return (
    <section id="booking" className="bg-[#0A3D45] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#4AABB5] bg-white/10 px-4 py-1.5 rounded-full mb-4">
            <CalendarBlank size={14} weight="bold" />
            Book Appointment
          </span>
          <h2 className="font-display font-bold text-white mb-3 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Buat Janji Sekarang
          </h2>
          <p className="font-body text-white/70 text-lg max-w-lg mx-auto">
            Pilih dokter, jadwal, dan cabang yang sesuai. Konfirmasi dalam 1 jam kerja.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-8 lg:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-[#E0F5F7] flex items-center justify-center mx-auto mb-5">
                <Check size={32} weight="bold" color="#0B9FAA" />
              </div>
              <h3 className="font-display font-bold text-[#1A2E35] text-2xl mb-3">Janji Terkirim!</h3>
              <p className="font-body text-[#4A5A60] text-base leading-relaxed max-w-sm mx-auto">
                Tim kami akan menghubungi <strong>{form.whatsapp}</strong> dalam 1 jam kerja untuk konfirmasi jadwal.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex items-center gap-2 bg-[#0B9FAA] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#0A3D45] transition-colors duration-200"
              >
                Buat Janji Lain
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Nama Lengkap *</label>
                  <input id="name" type="text" required placeholder="Nama Anda" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="wa" className={labelClass}>Nomor WhatsApp *</label>
                  <input id="wa" type="tel" required placeholder="08xx xxxx xxxx" value={form.whatsapp} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))} className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="treatment" className={labelClass}>Tipe Treatment *</label>
                <select id="treatment" required value={form.treatment} onChange={e => setForm(f => ({ ...f, treatment: e.target.value }))} className={inputClass}>
                  <option value="" disabled>Pilih treatment</option>
                  {treatments.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="doctor" className={labelClass}>Dokter Preferensi</label>
                  <select id="doctor" value={form.doctor} onChange={e => setForm(f => ({ ...f, doctor: e.target.value }))} className={inputClass}>
                    {doctors.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="branch" className={labelClass}>Cabang *</label>
                  <select id="branch" required value={form.branch} onChange={e => setForm(f => ({ ...f, branch: e.target.value }))} className={inputClass}>
                    <option value="" disabled>Pilih cabang</option>
                    {branches.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="date" className={labelClass}>Tanggal Preferensi *</label>
                <input id="date" type="date" required min={new Date().toISOString().split('T')[0]} value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className={inputClass} />
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#0B9FAA] text-white font-semibold text-base py-4 rounded-full hover:bg-[#0A3D45] transition-colors duration-200 active:scale-[0.98] shadow-[0_4px_16px_rgba(11,159,170,0.35)] mt-2">
                <CalendarBlank size={18} weight="bold" />
                Book Appointment
              </button>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-[#D6E4E6]" />
                <span className="font-body text-[#8A9EA5] text-xs">atau</span>
                <div className="flex-1 h-px bg-[#D6E4E6]" />
              </div>

              <a
                href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#2EB87A] text-white font-semibold text-base py-4 rounded-full hover:bg-[#259966] transition-colors duration-200 active:scale-[0.98] no-underline"
              >
                <WhatsappLogo size={20} weight="fill" />
                Chat Langsung via WhatsApp
              </a>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
