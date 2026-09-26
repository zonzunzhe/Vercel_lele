'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setGeneralError('Email dan password wajib diisi!');
      return;
    }

    setGeneralError('');
    setLoading(true);

    try {
      const response = await fetch('https://hmif.if.unram.ac.id/api/v3/geturgear/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login gagal, periksa kembali email dan password Anda.');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      alert('Login berhasil!');
      router.push('/daftar-alat');
    } catch (err) {
      setGeneralError(err.message || 'Terjadi kesalahan koneksi ke server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f3ee] px-4 sm:px-6 py-12 font-sans">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-900">
          Get Ur Gear
        </h1>
        <p className="mt-1 text-xs tracking-[0.2em] text-gray-500">
          RENT • EXPLORE • REPEAT
        </p>
      </div>
      
      <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-gray-100">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-950">Selamat Datang</h2>
          <p className="mt-2 text-sm text-gray-500">Masuk untuk mengelola peminjaman Anda</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          {generalError && (
            <div className="rounded-xl bg-red-50 p-3 text-center text-sm text-red-600 font-medium border border-red-200">
              {generalError}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 block w-full text-center rounded-full bg-emerald-800 py-3 text-sm text-white font-bold tracking-wide hover:bg-emerald-900 hover:shadow-md hover:-translate-y-0.5 transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-600">
            Belum punya akun?{' '}
            <Link href="/register" className="text-emerald-800 font-bold hover:underline">
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}