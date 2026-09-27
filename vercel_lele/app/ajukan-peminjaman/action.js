'use server';

export async function submitPeminjaman(data, token, userId) {
  try {
    if (!token) {
      throw new Error('Sesi tidak valid. Token tidak dikirim ke server.');
    }
    if (!userId) {
      throw new Error('Data pengguna tidak ditemukan. Silakan login ulang.');
    }
    if (!data.equipmentId || !data.tanggalMulai || !data.durasi) {
      throw new Error('ID peralatan, tanggal mulai, dan durasi wajib diisi.');
    }

    const endDate = new Date(`${data.tanggalMulai}T00:00:00`);
    endDate.setDate(endDate.getDate() + Number(data.durasi));
    const formattedEndDate = endDate.toISOString().slice(0, 10);

    const response = await fetch('https://hmif.if.unram.ac.id/api/v3/geturgear/rentals', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': 'pk_geturgear_83354acb379cf0fa',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_id: Number(userId),
        equipment_id: Number(data.equipmentId),
        quantity: 1,
        start_date: data.tanggalMulai,
        end_date: formattedEndDate,
        ...(data.catatan ? { purpose: data.catatan } : {}),
      }),
    });

    const resultData = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(resultData.message || resultData.error || 'API menolak pengajuan peminjaman.');
    }

    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: error.message || 'Gagal mengajukan peminjaman ke server.' 
    };
  }
}