'use server';

import { cookies } from 'next/headers';
import { apiFetch } from '@/lib/api';

export async function submitPeminjaman(data) {
  try {
    const cookieStore = await cookies();
    if (!cookieStore.get('session_token')?.value) {
      throw new Error('Anda harus login terlebih dahulu.');
    }

    const userId = cookieStore.get('user_id')?.value;
    if (!userId) {
      throw new Error('Data pengguna tidak ditemukan. Silakan login ulang.');
    }
    if (!data.equipmentId || !data.tanggalMulai || !data.durasi) {
      throw new Error('ID peralatan, tanggal mulai, dan durasi wajib diisi.');
    }

    const endDate = new Date(`${data.tanggalMulai}T00:00:00`);
    endDate.setDate(endDate.getDate() + Number(data.durasi));
    const formattedEndDate = endDate.toISOString().slice(0, 10);

    await apiFetch('/rentals', {
      method: 'POST',
      body: JSON.stringify({
        user_id: Number(userId),
        equipment_id: Number(data.equipmentId),
        quantity: 1,
        start_date: data.tanggalMulai,
        end_date: formattedEndDate,
        ...(data.catatan ? { purpose: data.catatan } : {}),
      }),
    });

    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: error.message || 'Gagal mengajukan peminjaman ke server.' 
    };
  }
}