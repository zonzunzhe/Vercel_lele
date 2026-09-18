'use server';

import { apiFetch } from '@/lib/api';
import { revalidatePath } from 'next/cache';

export async function updateStatusAction(peminjamanId, nextStatus, reason) {
  try {
    const res = await apiFetch(`/peminjaman/${peminjamanId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status: nextStatus, reason }),
    });

    revalidatePath(`/detail-peminjaman/${peminjamanId}`);
    return { success: true, message: 'Status berhasil diperbarui' };
  } catch (err) {
    return { success: false, message: err.message };
  }
}