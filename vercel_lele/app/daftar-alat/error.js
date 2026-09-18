"use client";

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl border border-red-200 shadow-sm max-w-md w-full text-center">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Gagal Memuat Katalog</h2>
        <p className="text-gray-600 mb-6">
          {error.message || "Terjadi kesalahan saat terhubung ke server panitia."}
        </p>
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => reset()} 
            className="w-full bg-red-600 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Coba Muat Ulang
          </button>
          <Link href="/" className="text-red-600 hover:underline font-medium text-sm mt-2">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}