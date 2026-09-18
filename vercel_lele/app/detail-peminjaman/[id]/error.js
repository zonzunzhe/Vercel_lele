'use client';

export default function ErrorDetailPeminjaman({ error, reset }) {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-sm border border-red-200 text-center">
        <div className="text-red-500 text-4xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Gagal Memuat Detail</h2>
        <p className="text-gray-500 mb-6">{error.message || "Data transaksi tidak ditemukan atau server bermasalah."}</p>
        <button 
          onClick={() => reset()}
          className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700"
        >
          Muat Ulang
        </button>
      </div>
    </div>
  );
}