'use client';

import { deleteAdminUserAction } from '@/app/actions/admin';

export default function AdminDeleteUserButton({ userId }) {
  function confirmDelete(event) {
    if (!window.confirm('Hapus pengguna ini? Tindakan ini tidak dapat dibatalkan.')) {
      event.preventDefault();
    }
  }

  return (
    <form action={deleteAdminUserAction} onSubmit={confirmDelete} className="mt-3">
      <input type="hidden" name="id" value={userId} />
      <button className="text-sm font-semibold text-red-600 hover:underline">Hapus pengguna</button>
    </form>
  );
}
