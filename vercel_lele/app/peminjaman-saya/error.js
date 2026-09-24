"use client";

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-center justify-center">
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-red-200 shadow-sm max-w-md w-full text-center">
        <div className="text-red-500 text-4xl sm:text-5xl mb-3 sm:mb-4">⚠️</div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Gagal Memuat Riwayat</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
          {error.message || "Gagal mengambil data peminjaman dari server."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/daftar-alat" className="w-full sm:w-1/2 bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-200 transition">
            Ke Katalog
          </Link>
          <button 
            onClick={() => reset()} 
            className="w-full sm:w-1/2 bg-red-600 text-white py-2.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-700 transition"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
}