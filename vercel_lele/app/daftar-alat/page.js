import Link from 'next/link';

export function KartuAlat({ nama, kategori, stok, gambar }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400 font-medium">
        {gambar}
      </div>
      <div className="p-5 flex flex-col grow">
        <div className="self-start mb-2">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            {kategori}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{nama}</h3>
        <p className="text-sm text-gray-500 mb-4">Stok Tersedia: {stok}</p>
        <div className="mt-auto">
          <Link href="/ajukan-peminjaman" className="block w-full text-center bg-emerald-700 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition">
            Pinjam Alat
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HalamanDaftarAlat() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Katalog Alat</h1>
          <Link href="/" className="text-emerald-700 hover:underline font-medium">
            &larr; Kembali ke Beranda
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <KartuAlat nama="Terpal" kategori="Bahan Baku" stok="5" gambar="[Gambar Terpa]" />
          <KartuAlat nama="Bambu" kategori="Bahan Baku" stok="2" gambar="[Gambar Bambu]" />
          <KartuAlat nama="Speaker Portable JBL" kategori="Audio" stok="4" gambar="[Gambar Speaker]" />
          <KartuAlat nama="Tenda" kategori="Kwbutuhan Dasar" stok="3" gambar="[Gambar Tenda]" />
          <KartuAlat nama="Tripod Kamera" kategori="Fotografi" stok="8" gambar="[Gambar Tripod]" />
          <KartuAlat nama="Kabel HDMI 100 Meter" kategori="Aksesoris" stok="15" gambar="[Gambar Kabel]" />
        </div>
      </div>
    </div>
  );
}