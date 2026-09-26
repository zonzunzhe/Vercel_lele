'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  // Fungsi untuk Logout (menghapus token dan kembali ke halaman login)
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Berhasil keluar!');
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 font-sans">
      
      {/* Judul di luar kotak */}
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Profil Saya</h1>

      {/* Kotak Utama Profil */}
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-sm border border-gray-200">
        
        {/* Informasi Akun */}
        <div className="space-y-4 text-sm">
          <div className="border-b border-gray-100 pb-3">
            <p className="text-xs text-gray-500 font-medium">Nama Lengkap</p>
            <p className="text-gray-900 font-semibold mt-0.5">Yara Fitriyah</p>
          </div>

          <div className="border-b border-gray-100 pb-3">
            <p className="text-xs text-gray-500 font-medium">Email</p>
            <p className="text-gray-900 font-semibold mt-0.5">yarafitriyah@gmail.com</p>
          </div>

          <div className="border-b border-gray-100 pb-3">
            <p className="text-xs text-gray-500 font-medium">Nomor Telepon</p>
            <p className="text-gray-900 font-semibold mt-0.5">081234567890</p>
          </div>

          <div className="pb-2">
            <p className="text-xs text-gray-500 font-medium">Status Akun</p>
            <p className="text-emerald-700 font-semibold mt-0.5">Mahasiswa / Peminjam Aktif</p>
          </div>
        </div>

        {/* Tombol Navigasi & Aksi */}
        <div className="mt-6 space-y-2">
          <Link
            href="/daftar-alat"
            className="block w-full text-center rounded bg-emerald-800 py-2 text-sm text-white font-medium hover:bg-emerald-900 transition"
          >
            Kembali ke Daftar Alat
          </Link>

          <button
            onClick={handleLogout}
            className="block w-full text-center rounded bg-red-600 py-2 text-sm text-white font-medium hover:bg-red-700 transition"
          >
            Keluar (Logout)
          </button>
        </div>

      </div>

    </div>
  );
}