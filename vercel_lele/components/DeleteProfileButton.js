'use client';

import { deleteProfileAction } from '@/app/actions/profile';

export default function DeleteProfileButton() {
  function confirmDelete(event) {
    const confirmed = window.confirm(
      'Apakah Anda yakin ingin menghapus akun? Data profile tidak dapat dipulihkan.'
    );
    if (!confirmed) {
      event.preventDefault();
    }
  }

  return (
    <form action={deleteProfileAction} onSubmit={confirmDelete} className="mt-4">
      <button type="submit" className="rounded bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">
        Hapus Akun
      </button>
    </form>
  );
}
