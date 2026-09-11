import Link from 'next/link';

export default function DetailAlatPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      
      {/* Judul di luar kotak */}
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Get Ur Gear</h1>

      {/* Kotak Utama Detail Alat */}
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-sm border border-gray-200">
        
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Detail Alat
        </h2>
        
        {/* Informasi Spesifikasi Alat */}
        <div className="space-y-3 text-sm mb-6">

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">Nama Alat</span>
            <span className="text-gray-900 font-semibold text-base">
              Tenda Dome 4 Orang
            </span>
          </div>

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">Kategori</span>
            <span className="text-gray-900 font-medium">
              Tenda
            </span>
          </div>

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">Kondisi</span>
            <span className="text-gray-900 font-medium">
              Baik
            </span>
          </div>

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">Stok</span>
            <span className="text-gray-900 font-medium">
              3 Unit
            </span>
          </div>

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">
              Status Ketersediaan
            </span>
            <span className="text-emerald-700 font-bold">
              Tersedia
            </span>
          </div>

          <div className="rounded bg-gray-50 p-3 border border-gray-100">
            <span className="text-xs text-gray-500 block">
              Deskripsi
            </span>
            <span className="text-gray-900">
              Tenda dome yang cocok digunakan untuk kegiatan camping
              3–4 orang.
            </span>
          </div>

        </div>

        {/* Tombol Aksi */}
        <div className="space-y-2">

          <Link
            href="/ajukan-peminjaman"
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