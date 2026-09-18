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
      setTimeout(() => {
        router.push('/peminjaman-saya');
      }, 2000);
    }
  }

  if (successMsg) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-10 rounded-xl text-center shadow-sm">
        <span className="text-5xl block mb-4">✅</span>
        <h3 className="font-bold text-2xl mb-2">Pengajuan Berhasil!</h3>
        <p className="text-emerald-700">Mengarahkan ke halaman riwayat peminjaman...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">
        {errorMsg && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm border border-red-200 font-medium flex items-center gap-3">
            <span className="text-lg">⚠️</span>
            <span>{errorMsg}</span>
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">ID Alat</label>
          <input 
            type="text" 
            name="alatId" 
            defaultValue={defaultAlatId} 
            readOnly={!!defaultAlatId}
            required
            className="w-full border border-gray-200 bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-gray-800" 
          />
          {defaultAlatId && <span className="text-xs text-emerald-600 mt-2 block font-medium">ID terisi otomatis dari katalog.</span>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Tanggal Mulai Pinjam</label>
          <input 
            type="date" 
            name="tanggalMulai" 
            required
            className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-gray-800" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Durasi (Hari)</label>
          <input 
            type="number" 
            name="durasi" 
            min="1"
            required
            placeholder="Misal: 3"
            className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-gray-800" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Catatan Tambahan (Opsional)</label>
          <textarea 
            name="catatan" 
            rows="3"
            placeholder="Misal: Mohon disiapkan sebelum jam 10 pagi."
            className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition resize-none text-gray-800" 
          ></textarea>
        </div>

        <div className="mt-4 pt-6 border-t border-gray-100 flex gap-4">
          <Link href="/daftar-alat" className="w-1/3 text-center bg-gray-100 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
            Batal
          </Link>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-2/3 bg-emerald-700 text-white py-3 rounded-lg font-bold hover:bg-emerald-800 transition disabled:bg-emerald-400 disabled:cursor-not-allowed flex justify-center items-center gap-2 tracking-wide"
          >
            {isLoading ? 'Memproses... ⏳' : 'Ajukan Peminjaman'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function AjukanPeminjamanPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Formulir Pengajuan</h1>
            <p className="text-gray-500 mt-1">Lengkapi detail untuk meminjam alat.</p>
          </div>
          <Link href="/daftar-alat" className="text-emerald-700 hover:underline font-medium mb-1">
            &larr; Batal
          </Link>
        </div>
        
        <Suspense fallback={
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center text-gray-400 font-medium animate-pulse">
            Memuat formulir...
          </div>
        }>
          <FormPengajuan />
        </Suspense>
      </div>
    </div>
  );
}