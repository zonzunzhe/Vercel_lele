import Link from 'next/link';
import { apiFetch } from '@/lib/api';

export function BarisStatus({ id, namaAlat, tanggal, status, warnaStatus }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition gap-4">
      <div>
        <h3 className="font-semibold text-gray-800 text-lg">{namaAlat}</h3>
        <p className="text-sm text-gray-500 mt-1">Diajukan pada: {tanggal}</p>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide ${warnaStatus}`}>
          {status}
        </span>
        <Link href={`/detail-peminjaman/${id}`} className="text-sm text-emerald-700 hover:text-emerald-900 hover:underline font-semibold whitespace-nowrap">
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
  const res = await apiFetch('/peminjaman');
  const riwayat = Array.isArray(res) ? res : res.data || [];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Riwayat Peminjaman</h1>
          <Link href="/" className="text-emerald-700 hover:underline font-medium">
            &larr; Kembali
          </Link>
        </div>
        
        {!riwayat || riwayat.length === 0 ? (
          <div className="bg-white p-16 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
            <span className="text-6xl mb-4">📭</span>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Belum Ada Riwayat</h2>
            <p className="text-gray-500 mb-6">Kamu belum memiliki riwayat peminjaman alat.</p>
            <Link href="/daftar-alat" className="bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-800 transition">
              Pinjam Alat Sekarang
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {riwayat.map((item) => (
              <BarisStatus 
                key={item.id}
                id={item.id}
                namaAlat={item.alat?.nama || `Alat ID: ${item.alat_id}`}
                tanggal={item.tanggal_mulai || item.created_at}
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