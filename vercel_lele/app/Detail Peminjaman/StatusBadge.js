import { BORROW_STATUS } from './status-rules';

const STATUS_CONFIG = {
  [BORROW_STATUS.PENDING]: { label: 'Menunggu Approval', className: 'bg-yellow-100 text-yellow-800' },
  [BORROW_STATUS.APPROVED]: { label: 'Disetujui', className: 'bg-blue-100 text-blue-800' },
  [BORROW_STATUS.REJECTED]: { label: 'Ditolak', className: 'bg-red-100 text-red-800' },
  [BORROW_STATUS.CANCELLED]: { label: 'Dibatalkan', className: 'bg-gray-100 text-gray-800' },
  [BORROW_STATUS.BORROWED]: { label: 'Sedang Dipinjam', className: 'bg-purple-100 text-purple-800' },
  [BORROW_STATUS.RETURNED]: { label: 'Sudah Dikembalikan', className: 'bg-green-100 text-green-800' },
};

export default function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || { label: status, className: 'bg-gray-100 text-gray-800' };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${config.className}`}>
      {config.label}
    </span>
  );
}