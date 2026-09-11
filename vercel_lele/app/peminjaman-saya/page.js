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
        <Link href="/Detail Peminjaman" className="text-sm text-emerald-700 hover:text-emerald-900 hover:underline font-semibold whitespace-nowrap">
          Lihat Detail &rarr;
        </Link>
      </div>
    </div>
  );
}