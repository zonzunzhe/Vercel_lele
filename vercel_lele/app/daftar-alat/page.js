import Link from 'next/link';
import { apiFetch } from '@/lib/api';

export function KartuAlat({ id, nama, kategori, stok, gambar }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      <div className="h-40 sm:h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400 font-medium relative">
        {gambar ? (
          <img src={gambar} alt={nama} className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm sm:text-base">[Tanpa Gambar]</span>
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col grow">
        <div className="self-start mb-2">
          <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
            {kategori}
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 leading-tight">{nama}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-4">Stok Tersedia: {stok}</p>
        
        <div className="mt-auto flex flex-col xl:flex-row gap-2">
          <Link href={`/detail-alat/${id}`} className="block w-full text-center bg-gray-100 text-gray-700 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-200 transition">
            Detail
          </Link>
          <Link href={`/ajukan-peminjaman?alatId=${id}`} className="block w-full text-center bg-emerald-700 text-white py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-emerald-800 transition">
            Pinjam
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function HalamanDaftarAlat() {
  const res = await apiFetch('/equipment');
  const daftarAlat = Array.isArray(res) ? res : res.data || [];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Katalog Alat</h1>
          <Link href="/" className="text-emerald-700 hover:underline font-medium text-sm sm:text-base self-start sm:self-auto">
            &larr; Kembali ke Beranda
          </Link>
        </div>
        
        {!daftarAlat || daftarAlat.length === 0 ? (
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-gray-200 text-center flex flex-col items-center">
            <span className="text-4xl sm:text-5xl mb-4">📭</span>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Belum Ada Alat</h2>
            <p className="text-sm sm:text-base text-gray-500">Katalog alat saat ini sedang kosong atau belum ada data dari server panitia.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {daftarAlat.map((alat) => (
              <KartuAlat 
                key={alat.id} 
                id={alat.id}
                nama={alat.nama_gear || alat.name || alat.nama || "Alat Tanpa Nama"} 
                kategori={alat.kategori || alat.category || "Tanpa Kategori"} 
                stok={alat.stok ?? alat.stock ?? 0} 
                gambar={alat.gambar || alat.image_url || alat.image} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}