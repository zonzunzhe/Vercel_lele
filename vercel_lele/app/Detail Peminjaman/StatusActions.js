'use client';

import { useState } from 'react';
import { BORROW_STATUS } from './status-rules';

export default function StatusActions({ peminjamanId, currentStatus, userRole, onStatusUpdated }) {
  const [loading, setLoading] = useState(false);

  const handleUpdateStatus = async (nextStatus, reason = null) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/peminjaman/${peminjamanId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nextStatus, reason, userRole }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Status berhasil diubah menjadi ${nextStatus}`);
        if (onStatusUpdated) onStatusUpdated();
      } else {
        alert(`Gagal: ${data.message}`);
      }
    } catch (err) {
      alert('Terjadi kesalahan koneksi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 my-4">
      {userRole === 'ADMIN' && currentStatus === BORROW_STATUS.PENDING && (
        <>
          <button
            disabled={loading}
            onClick={() => handleUpdateStatus(BORROW_STATUS.APPROVED)}
            className="px-3 py-1.5 bg-green-600 text-white rounded text-sm hover:bg-green-700 disabled:opacity-50 font-medium"
          >
            Approve Peminjaman
          </button>
          <button
            disabled={loading}
            onClick={() => {
              const reason = prompt('Masukkan alasan penolakan:');
              if (reason) handleUpdateStatus(BORROW_STATUS.REJECTED, reason);
            }}
            className="px-3 py-1.5 bg-red-600 text-white rounded text-sm hover:bg-red-700 disabled:opacity-50 font-medium"
          >
            Reject Peminjaman
          </button>
        </>
      )}

      {userRole === 'USER' && currentStatus === BORROW_STATUS.PENDING && (
        <button
          disabled={loading}
          onClick={() => handleUpdateStatus(BORROW_STATUS.CANCELLED)}
          className="px-3 py-1.5 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 disabled:opacity-50 font-medium"
        >
          Batalkan Pengajuan
        </button>
      )}

      {userRole === 'ADMIN' && currentStatus === BORROW_STATUS.APPROVED && (
        <button
          disabled={loading}
          onClick={() => handleUpdateStatus(BORROW_STATUS.BORROWED)}
          className="px-3 py-1.5 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 disabled:opacity-50 font-medium"
        >
          Tandai Alat Diambil
        </button>
      )}

      {userRole === 'ADMIN' && currentStatus === BORROW_STATUS.BORROWED && (
        <button
          disabled={loading}
          onClick={() => handleUpdateStatus(BORROW_STATUS.RETURNED)}
          className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50 font-medium"
        >
          Tandai Alat Dikembalikan
        </button>
      )}
    </div>
  );
}