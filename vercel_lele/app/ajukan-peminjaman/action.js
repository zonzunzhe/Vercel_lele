'use server';

import { apiFetch } from '@/lib/api';

export async function submitPeminjaman(data) {
  try {
    const payload = {
      alat_id: data.alatId,
      tanggal_mulai: data.tanggalMulai,
      durasi_hari: Number(data.durasi),
      catatan: data.catatan || ""
    };

    await apiFetch('/rentals', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: error.message || 'Gagal mengajukan peminjaman ke server.' 
    };
  }
}