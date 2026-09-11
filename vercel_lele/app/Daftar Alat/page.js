import Link from 'next/link';

export function KartuAlat({ nama, kategori, stok, gambar }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400 font-medium">
        {gambar}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="self-start mb-2">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            {kategori}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{nama}</h3>
        <p className="text-sm text-gray-500 mb-4">Stok Tersedia: {stok}</p>
        <div className="mt-auto">
          <Link href="/Ajukan Peminjaman" className="block w-full text-center bg-emerald-700 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition">
            Pinjam Alat
          </Link>
        </div>
      </div>
    </div>
  );
}