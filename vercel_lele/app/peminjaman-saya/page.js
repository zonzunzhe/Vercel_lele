import Link from 'next/link';

export function BarisStatus({ namaAlat, tanggal, status, warnaStatus }) {
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
        <Link href="/detail-peminjaman" className="text-sm text-emerald-700 hover:text-emerald-900 hover:underline font-semibold whitespace-nowrap">
          Lihat Detail &rarr;
        </Link>
      </div>
    </div>
  );
}
export default function HalamanPeminjamanSaya() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Riwayat Peminjaman</h1>
          <Link href="/" className="text-emerald-700 hover:underline font-medium">
            &larr; Kembali
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <BarisStatus 
            namaAlat="Proyektor Epson EB-X51" 
            tanggal="11 September 2026" 
            status="PENDING" 
            warnaStatus="bg-yellow-100 text-yellow-800" 
          />
          <BarisStatus 
            namaAlat="Kamera DSLR Canon" 
            tanggal="05 September 2026" 
            status="APPROVED" 
            warnaStatus="bg-blue-100 text-blue-800" 
          />
          <BarisStatus 
            namaAlat="Speaker Portable JBL" 
            tanggal="01 September 2026" 
            status="RETURNED" 
            warnaStatus="bg-emerald-100 text-emerald-800" 
          />
          <BarisStatus 
            namaAlat="Microphone Wireless" 
            tanggal="28 Agustus 2026" 
            status="REJECTED" 
            warnaStatus="bg-red-100 text-red-800" 
          />
        </div>
      </div>
    </div>
  );
}