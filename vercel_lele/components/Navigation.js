import Link from 'next/link';
import { cookies } from 'next/headers';
import NavigationMenu from '@/components/NavigationMenu';

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
        <NavigationMenu isLoggedIn={isLoggedIn} userName={userName} />
      </div>
    </nav>
  );
}
