import Link from 'next/link';
import { cookies } from 'next/headers';
import LogoutButton from '@/components/LogoutButton';

export default async function Navigation() {
  const cookieStore = await cookies();
  const isLoggedIn = Boolean(cookieStore.get('session_token')?.value);
  let userName = '';
  try {
    const profile = JSON.parse(cookieStore.get('user_profile')?.value || '{}');
    userName = profile.name || profile.email || '';
  } catch {
    userName = '';
  }

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="font-bold text-emerald-800">
          Get Ur Gear
        </Link>
        <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
          <Link href="/daftar-alat" className="hover:text-emerald-700">Katalog</Link>
          {isLoggedIn ? (
            <>
              <Link href="/peminjaman-saya" className="hover:text-emerald-700">Peminjaman Saya</Link>
              <Link href="/profile" className="flex items-center gap-1.5 hover:text-emerald-700" title="Profil saya">
                <span aria-hidden="true">👤</span>
                <span>{userName || 'Profile'}</span>
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link href="/login" className="rounded bg-emerald-700 px-3 py-1.5 text-white hover:bg-emerald-800">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
