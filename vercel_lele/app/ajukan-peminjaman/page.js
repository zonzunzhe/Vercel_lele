"use client";

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { submitPeminjaman } from './action';

function FormPengajuan() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultAlatId = searchParams.get('alatId') || '';

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await submitPeminjaman(data);

    if (!res.success) {
      setErrorMsg(res.error);
      setIsLoading(false);
    } else {
      setSuccessMsg(true);
      setIsLoading(false);
      // Pindahkan user ke halaman riwayat setelah berhasil
      setTimeout(() => {
        router.push('/peminjaman-saya');
      }, 2000);
    }
  }

  // SUCCESS STATE
  if (successMsg) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-6 rounded-xl text-center shadow-sm">
        <span className="text-4xl block mb-2">✅</span>
        <h3 className="font-bold text-lg">Pengajuan Berhasil!</h3>
        <p className="mt-1 text-sm">Mengarahkan ke halaman riwayat peminjaman...</p>
      </div>
    );
  }

  // NORMAL & ERROR STATE
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-5">
      {errorMsg && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-200 flex items-start gap-2">
          <span>⚠️</span>
          <span>{errorMsg}</span>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ID Alat</label>
        <input 
          type="text" 
          name="alatId" 
          defaultValue={defaultAlatId} 
          readOnly={!!defaultAlatId}
          required
          className="w-full border border-gray-300 p-2.5 rounded-lg bg-gray-50 focus:ring-emerald-500 outline-none" 
        />
        {defaultAlatId && <span className="text-xs text-gray-400 mt-1 block">ID terisi otomatis dari katalog.</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai Pinjam</label>
        <input 
          type="date" 
          name="tanggalMulai" 
          required
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-emerald-500 outline-none" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Durasi (Hari)</label>
        <input 
          type="number" 
          name="durasi" 
          min="1"
          required
          placeholder="Misal: 3"
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-emerald-500 outline-none" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Catatan Tambahan (Opsional)</label>
        <textarea 
          name="catatan" 
          rows="3"
          placeholder="Misal: Mohon disiapkan sebelum jam 10 pagi."
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-emerald-500 outline-none resize-none" 
        ></textarea>
      </div>

      <div className="mt-2 flex gap-3 pt-4 border-t border-gray-100">
        <Link href="/daftar-alat" className="w-1/3 text-center bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition">
          Batal
        </Link>
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-2/3 bg-emerald-700 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-800 transition disabled:bg-emerald-400 disabled:cursor-not-allowed flex justify-center items-center gap-2"
        >
          {isLoading ? 'Memproses... ⏳' : 'Ajukan Peminjaman'}
        </button>
      </div>
    </form>
  );
}

export default function AjukanPeminjamanPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Formulir Pengajuan</h1>
          <p className="text-gray-500 mt-1">Lengkapi detail durasi dan jadwal untuk meminjam alat.</p>
        </div>
        
        <Suspense fallback={<div className="p-12 text-center text-gray-500 animate-pulse">Memuat formulir...</div>}>
          <FormPengajuan />
        </Suspense>
      </div>
    </div>
  );
}