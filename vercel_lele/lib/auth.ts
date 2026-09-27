import { cookies } from 'next/headers';
import { apiFetch } from '@/lib/api';

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value || '';
  const userId = cookieStore.get('user_id')?.value || '';
  const role = (cookieStore.get('user_role')?.value || '').toLowerCase();
  let user = {};

  try {
    user = JSON.parse(cookieStore.get('user_profile')?.value || '{}');
  } catch {
    user = {};
  }

  return { token, userId, role, user };
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session.token || !session.userId || session.role !== 'admin') {
    throw new Error('Akses admin diperlukan.');
  }
  return session;
}

export async function getAdminResource(endpoint: string) {
  await requireAdmin();
  return apiFetch(endpoint);
}
