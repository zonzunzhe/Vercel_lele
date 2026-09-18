"use client";

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl border border-red-200 shadow-sm max-w-md w-full text-center">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Gagal Memuat Riwayat</h2>
        <p className="text-gray-600 mb-6">
          {error.message || "Gagal mengambil data peminjaman dari server."}
        </p>
        <div className="flex gap-3">
          <Link href="/daftar-alat" className="w-1/2 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition">
            Ke Katalog
          </Link>
          <button 
            onClick={() => reset()} 
            className="w-1/2 bg-red-600 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
}