'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  
  const [errorPhone, setErrorPhone] = useState('');
  const [generalError, setGeneralError] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    
    if (value === '' || /^[0-9]+$/.test(value)) {
      setPhone(value);
      setErrorPhone(''); 
    } else {
      setErrorPhone('Nomor telepon hanya boleh diisi dengan angka!');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (!nama || !email || !phone || !password) {
      setGeneralError('Semua kolom wajib diisi!');
      return;
    }

    if (phone.length < 10) {
      setErrorPhone('Nomor telepon minimal harus 10 digit!');
      return;
    }

    setGeneralError('');
    alert('Registrasi berhasil!');
  };
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f3ee] px-6 py-12 font-sans">
      
      {/* Brand Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-900">
          Get Ur Gear
        </h1>
        <p className="mt-1 text-xs tracking-[0.2em] text-gray-500">
          RENT • EXPLORE • REPEAT
        </p>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-md rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-gray-100">
        
        {/* Form Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-950">Buat Akun Baru</h2>
          <p className="mt-2 text-sm text-gray-500">Lengkapi data diri Anda di bawah ini</p>
        </div>
        
        <form onSubmit={handleRegister} className="space-y-5">
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
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Nomor Telepon</label>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="08123XXXXXX"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
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
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-6 block w-full text-center rounded-full bg-emerald-800 py-3 text-sm text-white font-bold tracking-wide hover:bg-emerald-900 hover:shadow-md hover:-translate-y-0.5 transition duration-200"
          >
            Daftar Sekarang
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