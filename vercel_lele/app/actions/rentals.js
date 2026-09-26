'use server';

import { apiFetch } from '@/lib/api';
import { revalidatePath } from 'next/cache';

export async function getRentalsAction() {
  try {
    const res = await apiFetch('/rentals');
    return { success: true, data: res.data || res };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export async function createRentalAction(payload) {
  try {
    const res = await apiFetch('/rentals', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    revalidatePath('/peminjaman-saya');
    return { success: true, data: res };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export async function updateRentalAction(id, payload) {
  try {
    const res = await apiFetch(`/rentals/${id}`, {
      method: 'POST',
      headers: {
        'X-HTTP-Method-Override': 'PUT',
      },
      body: JSON.stringify(payload),
    });
    revalidatePath(`/detail-peminjaman/${id}`);
    return { success: true, data: res };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export async function deleteRentalAction(id) {
  try {
    const res = await apiFetch(`/rentals/${id}`, {
      method: 'POST',
      headers: {
        'X-HTTP-Method-Override': 'DELETE',
      },
    });
    revalidatePath('/peminjaman-saya');
    return { success: true, data: res };
  } catch (err) {
    return { success: false, message: err.message };
  }
}