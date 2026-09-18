'use client';

import { useTransition } from 'react';
import { BORROW_STATUS } from '@/lib/status-rules';
import { updateStatusAction } from '@/app/actions/peminjaman';

export default function StatusActions({ peminjamanId, currentStatus, userRole }) {
  const [isPending, startTransition] = useTransition();

  const handleUpdateStatus = (nextStatus, reason = null) => {
    startTransition(async () => {
      const result = await updateStatusAction(peminjamanId, nextStatus, reason);
      if (result.success) {
        alert(result.message);
      } else {
        alert(`Gagal: ${result.message}`);
      }
    });
  };

  return (
    <div className="flex gap-2 my-4">
      {userRole === 'ADMIN' && currentStatus === BORROW_STATUS.PENDING && (
        <>
          <button
            disabled={isPending}
            onClick={() => handleUpdateStatus(BORROW_STATUS.APPROVED)}
            className="px-3 py-1.5 bg-green-600 text-white rounded text-sm hover:bg-green-700 disabled:opacity-50 font-medium"
          >
            {isPending ? 'Memproses...' : 'Approve Peminjaman'}
          </button>
          <button
            disabled={isPending}
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
          disabled={isPending}
          onClick={() => handleUpdateStatus(BORROW_STATUS.CANCELLED)}
          className="px-3 py-1.5 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 disabled:opacity-50 font-medium"
        >
          Batalkan Pengajuan
        </button>
      )}

      {userRole === 'ADMIN' && currentStatus === BORROW_STATUS.APPROVED && (
        <button
          disabled={isPending}
          onClick={() => handleUpdateStatus(BORROW_STATUS.BORROWED)}
          className="px-3 py-1.5 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 disabled:opacity-50 font-medium"
        >
          Tandai Alat Diambil
        </button>
      )}

      {userRole === 'ADMIN' && currentStatus === BORROW_STATUS.BORROWED && (
        <button
          disabled={isPending}
          onClick={() => handleUpdateStatus(BORROW_STATUS.RETURNED)}
          className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50 font-medium"
        >
          Tandai Alat Dikembalikan
        </button>
      )}
    </div>
  );
}