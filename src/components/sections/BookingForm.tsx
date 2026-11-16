import { useState } from 'react';
import type { FormEvent } from 'react';

const treatments = ['Pemeriksaan & Konsultasi', 'Scaling / Pembersihan Karang', 'Tambal Gigi', 'Cabut Gigi', 'Root Canal (Saraf)', 'Behel / Orthodonti', 'Veneer & Cosmetic', 'Bleaching / Whitening', 'Implant Gigi', 'Gigi Palsu / Prosthodonti', 'Bedah Mulut', 'Gigi Anak', 'Lainnya'];
const doctors = ['Tidak ada preferensi', 'drg. Sari Wulandari, Sp.KGA (Anak)', 'drg. Bayu Pratama, Sp.Ort (Behel)', 'drg. Rina Setiawati, Sp.KG (Root Canal)', 'drg. Daniel Hartono, Sp.BM (Bedah Mulut)', 'drg. Nina Wijaya, Sp.Pros (Implant)', 'drg. Andre Kusuma (Cosmetic)', 'drg. Maya Indriani, Sp.Perio (Gusi)', 'drg. Reza Hartanto (General)'];
const branches = ['Kelapa Gading', 'Kuningan', 'BSD', 'Bintaro', 'Bekasi'];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', whatsapp: '', treatment: '', doctor: '', branch: '', date: '' });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <div className="done" role="status">
        <span className="stamp">Terkirim</span>
        <h3>Janji Terkirim!</h3>
        <p>Tim kami akan menghubungi <strong>{form.whatsapp}</strong> dalam 1 jam kerja untuk konfirmasi jadwal.</p>
        <button type="button" className="btn" onClick={() => setSubmitted(false)}>Buat Janji Lain</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="two">
        <div className="field">
          <label htmlFor="name">Nama Lengkap *</label>
          <input id="name" type="text" required placeholder="Nama Anda" value={form.name} onChange={set('name')} />
        </div>
        <div className="field">
          <label htmlFor="wa">Nomor WhatsApp *</label>
          <input id="wa" type="tel" required placeholder="08xx xxxx xxxx" value={form.whatsapp} onChange={set('whatsapp')} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="treatment">Tipe Treatment *</label>
        <select id="treatment" required value={form.treatment} onChange={set('treatment')}>
          <option value="" disabled>Pilih treatment</option>
          {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="two">
        <div className="field">
          <label htmlFor="doctor">Dokter Preferensi</label>
          <select id="doctor" value={form.doctor} onChange={set('doctor')}>
            {doctors.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="branch">Cabang *</label>
          <select id="branch" required value={form.branch} onChange={set('branch')}>
            <option value="" disabled>Pilih cabang</option>
            {branches.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="date">Tanggal Preferensi *</label>
        <input id="date" type="date" required min={new Date().toISOString().split('T')[0]} value={form.date} onChange={set('date')} />
      </div>

      <button type="submit" className="btn btn--primary">Book Appointment</button>
      <p className="alt">atau</p>
      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn">Chat via WhatsApp</a>
    </form>
  );
}
