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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <Link href="/peminjaman-saya" className="text-emerald-600 hover:underline text-sm mb-6 inline-block">
          &larr; Kembali
        </Link>
        
        <div className="flex justify-between items-start border-b pb-6 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Detail Transaksi</h1>
            <p className="text-gray-500 text-sm mt-1">ID Transaksi: #{id}</p>
          </div>
          <StatusBadge status={peminjaman.status} />
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <p className="text-sm text-gray-500">Nama Alat</p>
            <p className="font-medium text-gray-800">{peminjaman.nama_alat || peminjaman.equipment_name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Tanggal Pinjam</p>
            <p className="font-medium text-gray-800">{peminjaman.tanggal_pinjam || peminjaman.start_date}</p>
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