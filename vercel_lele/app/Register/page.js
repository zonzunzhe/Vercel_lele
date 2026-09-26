'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  
  const [errorPhone, setErrorPhone] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]+$/.test(value)) {
      setPhone(value);
      setErrorPhone(''); 
    } else {
      setErrorPhone('Nomor telepon hanya boleh diisi dengan angka!');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!nama || !email || !password || !phone) {
      setGeneralError('Semua kolom wajib diisi!');
      return;
    }

    if (phone.length < 10) {
      setErrorPhone('Nomor telepon minimal harus 10 digit!');
      return;
    }

    setGeneralError('');
    setLoading(true);

    try {
      const response = await fetch('https://hmif.if.unram.ac.id/api/v3/geturgear/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: nama,
          email: email,
          password: password,
          phone: phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registrasi gagal, silakan periksa kembali data Anda.');
      }

      alert('Registrasi berhasil! Silakan masuk dengan akun Anda.');
      router.push('/login');
    } catch (err) {
      setGeneralError(err.message || 'Terjadi kesalahan pada server.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#f5f3ee] px-4 sm:px-6 py-12 font-sans">
      <Link 
        href="/login" 
        className="absolute top-6 left-6 sm:top-10 sm:left-10 flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-950 transition"
      >
        &larr; Kembali
      </Link>
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
          <h2 className="text-2xl font-bold text-emerald-950">Buat Akun Baru</h2>
          <p className="mt-2 text-sm text-gray-500">Lengkapi data diri Anda di bawah ini</p>
        </div>
        
        <form onSubmit={handleRegister} className="space-y-4 sm:space-y-5">
          {generalError && (
            <div className="rounded-xl bg-red-50 p-3 text-center text-sm text-red-600 font-medium border border-red-200">
              {generalError}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Nama Lengkap</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama Anda"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
            />
          </div>

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
            <label className="block text-sm font-semibold text-gray-800 mb-2">Nomor Telepon</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="08123XXXXXX"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
            />
            {errorPhone && (
              <p className="mt-2 text-xs text-red-500 font-medium">
                {errorPhone}
              </p>
            )}
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
            {loading ? 'Memproses...' : 'Daftar Sekarang'}
          </button>
        </form>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-600">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-emerald-800 font-bold hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}