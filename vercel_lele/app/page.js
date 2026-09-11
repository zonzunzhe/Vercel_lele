import Link from 'next/link';

export default function HalamanUtama() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Sistem Peminjaman Alat</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Pilih menu di bawah untuk mengelola peminjaman Anda.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <Link href="/Daftar Alat" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
          <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Daftar Alat</h2>
          <p className="text-sm text-gray-500">Lihat katalog barang yang tersedia</p>
        </Link>
        
        <Link href="/Peminjaman Saya" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
          <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Peminjaman Saya</h2>
          <p className="text-sm text-gray-500">Cek status pengajuan Anda</p>
        </Link>

        <Link href="/Ajukan Peminjaman" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
          <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Ajukan Pinjaman</h2>
          <p className="text-sm text-gray-500">Buat form pengajuan baru</p>
        </Link>

        <Link href="/Login" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
          <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Autentikasi</h2>
          <p className="text-sm text-gray-500">Masuk atau daftar akun baru</p>
        </Link>
      </div>
    </div>
  );
}