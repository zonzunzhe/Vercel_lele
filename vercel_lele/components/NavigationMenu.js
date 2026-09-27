'use client';

import Link from 'next/link';
import { useState } from 'react';
import LogoutButton from '@/components/LogoutButton';

export default function NavigationMenu({ isLoggedIn, isAdmin, userName }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="rounded-lg p-2 text-emerald-900 hover:bg-emerald-50 md:hidden"
      >
        <span className="text-2xl" aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
      </button>

      <div className={`${isOpen ? 'flex' : 'hidden'} absolute right-0 top-full z-50 mt-2 min-w-56 flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-lg md:static md:flex md:min-w-0 md:flex-row md:items-center md:gap-4 md:rounded-none md:border-0 md:p-0 md:shadow-none`}>
        <Link href="/daftar-alat" onClick={closeMenu} className="rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700">
          Katalog
        </Link>
        {isLoggedIn ? (
          <>
            <Link href="/peminjaman-saya" onClick={closeMenu} className="rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700">
              Peminjaman Saya
            </Link>
            <Link href="/profile" onClick={closeMenu} className="rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700">
              <span aria-hidden="true">👤</span> {userName || 'Profile'}
            </Link>
            {isAdmin && (
              <Link href="/admin" onClick={closeMenu} className="rounded px-3 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50">
                🛡️ Admin
              </Link>
            )}
            <LogoutButton />
          </>
        ) : (
          <Link href="/pilih-role" onClick={closeMenu} className="rounded bg-emerald-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-emerald-800">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
