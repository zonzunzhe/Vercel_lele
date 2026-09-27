'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { apiFetch } from '@/lib/api';
import { requireAdmin } from '@/lib/auth';

function value(formData, name) {
  return String(formData.get(name) || '').trim();
}

export async function createAdminUserAction(formData) {
  let errorMessage;
  try {
    await requireAdmin();
    await apiFetch('/users', {
      method: 'POST',
      body: JSON.stringify({
        name: value(formData, 'name'),
        email: value(formData, 'email'),
        phone: value(formData, 'phone'),
        password: value(formData, 'password'),
        role: value(formData, 'role') || 'user',
      }),
    });
    revalidatePath('/admin');
  } catch (error) {
    errorMessage = error.message || 'Pengguna gagal dibuat.';
  }
  if (errorMessage) return { error: errorMessage };
  redirect('/admin?success=created');
}

export async function updateAdminUserAction(formData) {
  let errorMessage;
  try {
    await requireAdmin();
    const id = value(formData, 'id');
    await apiFetch(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: value(formData, 'name'),
        email: value(formData, 'email'),
        phone: value(formData, 'phone'),
        role: value(formData, 'role') || 'user',
      }),
    });
    revalidatePath('/admin');
  } catch (error) {
    errorMessage = error.message || 'Pengguna gagal diperbarui.';
  }
  if (errorMessage) return { error: errorMessage };
  redirect('/admin?success=updated');
}

export async function deleteAdminUserAction(formData) {
  let errorMessage;
  try {
    const session = await requireAdmin();
    const id = value(formData, 'id');
    if (String(id) === String(session.userId)) {
      return { error: 'Akun admin yang sedang digunakan tidak dapat dihapus.' };
    }
    await apiFetch(`/users/${id}`, { method: 'DELETE' });
    revalidatePath('/admin');
  } catch (error) {
    errorMessage = error.message || 'Pengguna gagal dihapus.';
  }
  if (errorMessage) return { error: errorMessage };
  redirect('/admin?success=deleted');
}
