'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://hmif.if.unram.ac.id/api/v3';
const PROJECT = process.env.NEXT_PUBLIC_PROJECT_ID || 'geturgear';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || 'pk_geturgear_83354acb379cf0fa';

function getUserIdFromToken(token: string) {
  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return decoded.user_id || decoded.userId || decoded.id || decoded.sub;
  } catch {
    return null;
  }
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  if (!email || !password) {
    return { error: 'Email dan password wajib diisi.' };
  }

  const res = await fetch(`${BASE_URL}/${PROJECT}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-API-Key': API_KEY,
    },
    body: JSON.stringify({ email, password }),
    cache: 'no-store',
  });

  const data = await res.json().catch(() => ({}));
  const token = data.token
    || data.access_token
    || data.data?.token
    || data.data?.access_token;
  const user = data.user || data.data?.user || null;
  const userId = data.user_id
    || data.user?.id
    || data.data?.user_id
    || data.data?.user?.id
    || getUserIdFromToken(token);

  if (!res.ok || !token) {
    return { error: data.message || 'Login gagal.' };
  }

  if (!userId) {
    return { error: 'Login gagal: identitas pengguna tidak dapat diverifikasi.' };
  }

  const cookieStore = await cookies();
  cookieStore.set('session_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  cookieStore.set('user_profile', JSON.stringify(user || {}), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  if (userId) {
    cookieStore.set('user_id', String(userId), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
  }

  redirect('/daftar-alat');
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('session_token');
  cookieStore.delete('user_profile');
  cookieStore.delete('user_id');
  redirect('/login');
}