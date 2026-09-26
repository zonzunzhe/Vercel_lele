import Link from 'next/link';
import { apiFetch } from '@/lib/api';

export default async function DetailAlatPage({ params }) {
  const { id } = params;
  let alat = null;

  try {
    const res = await apiFetch(`/equipment/${id}`);
    alat = res.data || res;
  } catch (error) {
    console.error(error);
  }

  if (!alat || Object.keys(alat).length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm rounded-lg bg-white p-8 text-center shadow-sm border border-gray-200">
          <h2 className="mb-2 text-xl font-bold text-gray-900">Alat Tidak Ditemukan</h2>
          <p className="mb-6 text-sm text-gray-500">Data alat dengan ID tersebut tidak ada di server.</p>
          <Link href="/daftar-alat" className="block w-full rounded bg-emerald-800 py-2 text-sm text-white font-medium hover:bg-emerald-900 transition">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Get Ur Gear</h1>
      
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-sm border border-gray-200">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">Detail Alat</h2>
        
        <div className="space-y-3 text-sm mb-6">
          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">Nama Alat</span>
            <span className="text-gray-900 font-semibold text-base">
              {alat.nama_gear || alat.name || alat.nama || 'Tanpa Nama'}
            </span>
          </div>

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">Kategori</span>
            <span className="text-gray-900 font-medium">
              {alat.kategori || alat.category || 'Tanpa Kategori'}
            </span>
          </div>

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">Stok</span>
            <span className="text-gray-900 font-medium">
              {alat.stok ?? alat.stock ?? 0} Unit
            </span>
          </div>

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">Status Ketersediaan</span>
            <span className={`font-bold ${(alat.status || 'AVAILABLE').toUpperCase() === 'AVAILABLE' ? 'text-emerald-700' : 'text-red-600'}`}>
              {alat.status || 'AVAILABLE'}
            </span>
          </div>

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">Deskripsi</span>
            <span className="text-gray-900">
              {alat.deskripsi || alat.description || 'Tidak ada deskripsi yang tersedia untuk alat ini.'}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Link
            href={`/ajukan-peminjaman?alatId=${id}`}
            className="block w-full text-center rounded bg-emerald-800 py-2 text-sm text-white font-medium hover:bg-emerald-900 transition"
          >
            Ajukan Peminjaman
          </Link>
          <Link
            href="/daftar-alat"
            className="block w-full text-center rounded border border-gray-300 py-2 text-sm text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}