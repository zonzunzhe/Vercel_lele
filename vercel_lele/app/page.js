"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function HalamanUtama() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-gray-800 flex flex-col">
      <nav className="relative flex items-center justify-between px-6 py-5 md:px-12 bg-[#f5f3ee] z-50">
        <div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-emerald-900">
            Get Ur Gear
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 mt-1">
            RENT • EXPLORE • REPEAT
          </p>
        </div>

        <button 
          className="md:hidden p-2 text-emerald-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-emerald-800 border-b-2 border-emerald-800 pb-1">
            Home
          </Link>
          <Link href="/daftar-alat" className="text-gray-600 hover:text-emerald-800 transition">
            Daftar Alat
          </Link>
          <Link href="/peminjaman-saya" className="text-gray-600 hover:text-emerald-800 transition">
            Peminjaman Saya
          </Link>
          <Link href="/ajukan-peminjaman" className="text-gray-600 hover:text-emerald-800 transition">
            Ajukan Pinjaman
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-emerald-800 transition">
            Login
          </Link>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#f5f3ee] border-t border-gray-200 p-6 flex flex-col gap-4 shadow-lg md:hidden">
            <Link href="/" className="text-emerald-800 font-bold">Home</Link>
            <Link href="/daftar-alat" className="text-gray-600">Daftar Alat</Link>
            <Link href="/peminjaman-saya" className="text-gray-600">Peminjaman Saya</Link>
            <Link href="/ajukan-peminjaman" className="text-gray-600">Ajukan Pinjaman</Link>
            <Link href="/login" className="text-emerald-700 font-bold mt-2 pt-4 border-t border-gray-200">Login / Register</Link>
          </div>
        )}
      </nav>

      <section className="px-4 md:px-12 py-6 md:py-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl md:rounded-3xl bg-[#e9e6dc]">
          <div className="grid md:grid-cols-2 min-h-[400px] md:min-h-[500px]">
            <div className="flex flex-col justify-center px-6 py-10 md:px-14 lg:px-20 order-2 md:order-1">
              <div className="mb-4 md:mb-5 inline-block w-fit rounded-full bg-[#d9dfc9] px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-emerald-900">
                🌲 Gear Rental for Your Next Adventure
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-emerald-950">
                Adventure Starts<br />With The Right<br />Gear.
              </h2>
              <p className="mt-4 md:mt-6 max-w-lg text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                Pinjam perlengkapan outdoor dengan mudah, aman, dan praktis. Mulai dari camping, hiking, hingga kegiatan alam lainnya.
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/daftar-alat" className="w-full sm:w-auto text-center rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-900 transition">
                  Jelajahi Gear →
                </Link>
                <Link href="/peminjaman-saya" className="w-full sm:w-auto text-center rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-white transition">
                  Peminjaman Saya
                </Link>
              </div>
            </div>
            <div className="relative h-[250px] md:h-auto md:min-h-full order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80" alt="Camping outdoor" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute right-4 bottom-4 md:right-6 md:top-6 md:bottom-auto rounded-full bg-white/80 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-emerald-900 backdrop-blur-sm">
                Good Gear, Better Journey
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ntar dulu */}
    </div>
  );
}