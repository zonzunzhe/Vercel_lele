'use client';

import { useState } from 'react';
import Link from 'next/link';
import { loginAction } from '@/app/actions/auth';

export default function AdminLoginPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.set('role', 'admin');
    try {
      const result = await loginAction(formData);
      if (result?.error) setError(result.error);
    } catch (caught) {
      setError(caught.message || 'Login admin gagal.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 p-4 sm:p-8">
      <section className="w-full max-w-md rounded-2xl border border-amber-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <div className="text-4xl" aria-hidden="true">🛡️</div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">Login Admin</h1>
          <p className="mt-2 text-sm text-gray-600">Gunakan akun admin yang telah terdaftar.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p role="alert" className="rounded bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          <label className="block text-sm font-semibold text-gray-700">Email<input name="email" type="email" required className="mt-1 w-full rounded border p-3" /></label>
          <label className="block text-sm font-semibold text-gray-700">Password<input name="password" type="password" required className="mt-1 w-full rounded border p-3" /></label>
          <button disabled={loading} className="w-full rounded bg-amber-600 px-4 py-3 font-bold text-white hover:bg-amber-700 disabled:opacity-50">{loading ? 'Memproses...' : 'Masuk sebagai Admin'}</button>
        </form>
        <Link href="/pilih-role" className="mt-6 block text-center text-sm text-emerald-700 hover:underline">Kembali pilih role</Link>
      </section>
    </main>
  );
}
