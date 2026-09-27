'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { apiFetch } from '@/lib/api';

async function getUserId() {
  const cookieStore = await cookies();
  const userId = cookieStore.get('user_id')?.value;
  if (!userId) {
    throw new Error('Sesi tidak valid. Silakan login kembali.');
  }
  return userId;
}

export async function getCurrentProfile() {
  try {
    const cookieStore = await cookies();
    if (!cookieStore.get('session_token')?.value) {
      return null;
    }

    const response = await apiFetch('/me');
    return response.data || response.user || response;
  } catch {
    return null;
  }
}

export async function updateProfileAction(formData) {
  let errorMessage;
  try {
    const userId = await getUserId();
    const updatedResponse = await apiFetch(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
      }),
    });
    const updatedUser = updatedResponse?.data || updatedResponse?.user || updatedResponse;
    const cookieStore = await cookies();
    cookieStore.set('user_profile', JSON.stringify(updatedUser), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    revalidatePath('/profile');
  } catch (error) {
    errorMessage = error.message || 'Profil gagal diperbarui.';
  }
  if (errorMessage) return { error: errorMessage };
  redirect('/profile?updated=1');
}

export async function deleteProfileAction() {
  let errorMessage;
  try {
    const userId = await getUserId();
    await apiFetch(`/users/${userId}`, { method: 'DELETE' });
    const cookieStore = await cookies();
    cookieStore.delete('session_token');
    cookieStore.delete('user_profile');
    cookieStore.delete('user_id');
  } catch (error) {
    errorMessage = error.message || 'Akun gagal dihapus.';
  }
  if (errorMessage) return { error: errorMessage };
  redirect('/login?deleted=1');
}
