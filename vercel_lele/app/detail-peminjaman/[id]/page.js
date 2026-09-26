import { apiFetch } from '@/lib/api';
import StatusBadge from '@/components/StatusBadge';
import StatusActions from '@/components/StatusActions';
import Link from 'next/link';

export default async function DetailPeminjamanPage({ params }) {
  const { id } = await params;
  
  const data = await apiFetch(`/rentals/${id}`);
  const peminjaman = data.data || data; 
  
  const userRole = 'ADMIN'; 

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white p-5 sm:p-8 rounded-xl shadow-sm border border-gray-200">
        <Link href="/peminjaman-saya" className="text-emerald-600 hover:underline text-xs sm:text-sm mb-4 sm:mb-6 inline-block font-medium">
          &larr; Kembali
        </Link>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-gray-100 pb-5 sm:pb-6 mb-5 sm:mb-6 gap-4 sm:gap-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Detail Transaksi</h1>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">ID Transaksi: #{id}</p>
          </div>
          <StatusBadge status={peminjaman.status} />
        </div>

        <div className="space-y-4 mb-6 sm:mb-8">
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100">
            <p className="text-xs sm:text-sm text-gray-500">Nama Alat</p>
            <p className="font-semibold text-gray-800 text-sm sm:text-base mt-0.5">{peminjaman.nama_alat || peminjaman.equipment_name}</p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100">
            <p className="text-xs sm:text-sm text-gray-500">Tanggal Pinjam</p>
            <p className="font-semibold text-gray-800 text-sm sm:text-base mt-0.5">{peminjaman.tanggal_pinjam || peminjaman.start_date}</p>
          </div>
        </div>

        <StatusActions 
          peminjamanId={id} 
          currentStatus={peminjaman.status} 
          userRole={userRole} 
        />
      </div>
    </div>
  );
}