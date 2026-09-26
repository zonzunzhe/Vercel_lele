import Link from 'next/link';
import { apiFetch } from '@/lib/api';

export function BarisStatus({ id, namaAlat, tanggal, status, warnaStatus }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition gap-3 sm:gap-4">
      <div>
        <h3 className="font-semibold text-gray-800 text-base sm:text-lg">{namaAlat}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Diajukan pada: {tanggal}</p>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto mt-2 sm:mt-0">
        <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wide ${warnaStatus}`}>
          {status}
        </span>
        <Link href={`/detail-peminjaman/${id}`} className="text-xs sm:text-sm text-emerald-700 hover:text-emerald-900 hover:underline font-semibold whitespace-nowrap">
          Lihat Detail &rarr;
        </Link>
      </div>
    </div>
  );
}

function getWarnaStatus(status) {
  const s = (status || '').toLowerCase();
  if (s === 'approved' || s === 'disetujui') return 'bg-blue-100 text-blue-800';
  if (s === 'returned' || s === 'selesai') return 'bg-emerald-100 text-emerald-800';
  if (s === 'rejected' || s === 'ditolak') return 'bg-red-100 text-red-800';
  return 'bg-yellow-100 text-yellow-800';
}

export default async function HalamanPeminjamanSaya() {
  const res = await apiFetch('/rentals');
  const riwayat = Array.isArray(res) ? res : res.data || [];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Riwayat Peminjaman</h1>
          <Link href="/" className="text-emerald-700 hover:underline font-medium text-sm sm:text-base self-start sm:self-auto">
            &larr; Kembali
          </Link>
        </div>
        
        {!riwayat || riwayat.length === 0 ? (
          <div className="bg-white p-8 sm:p-16 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
            <span className="text-5xl sm:text-6xl mb-3 sm:mb-4">📭</span>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Belum Ada Riwayat</h2>
            <p className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-6">Kamu belum memiliki riwayat peminjaman alat.</p>
            <Link href="/daftar-alat" className="bg-emerald-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-emerald-800 transition">
              Pinjam Alat Sekarang
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {riwayat.map((item) => (
              <BarisStatus 
                key={item.id}
                id={item.id}
                namaAlat={item.alat?.nama || `Alat ID: ${item.alat_id || item.equipment_id}`}
                tanggal={item.tanggal_mulai || item.created_at || item.start_date}
                status={(item.status || 'PENDING').toUpperCase()}
                warnaStatus={getWarnaStatus(item.status)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}