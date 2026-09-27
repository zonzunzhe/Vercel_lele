import Link from 'next/link';

export default function HalamanUtama() {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-gray-800 flex flex-col">
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

      <section className="px-4 md:px-12 py-10 md:py-16 flex-grow">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10 text-center px-4">
            <p className="mb-2 md:mb-3 text-xs md:text-sm font-semibold tracking-widest text-emerald-700">
              — MULAI DARI SINI —
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-emerald-950">
              Kelola Peminjamanmu dengan Mudah
            </h2>
            <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-500">
              Pilih menu di bawah untuk mengelola peminjaman Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/daftar-alat" className="group rounded-2xl bg-white p-5 md:p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="mb-4 md:mb-5 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#dfe6d0] text-xl md:text-2xl">
                ⛺
              </div>
              <h3 className="text-lg md:text-xl font-bold text-emerald-900">
                Daftar Alat
              </h3>
              <p className="mt-1.5 md:mt-2 text-xs md:text-sm leading-5 md:leading-6 text-gray-500">
                Lihat katalog barang yang tersedia
              </p>
              <div className="mt-4 md:mt-6 flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-[#dfe6d0] text-base md:text-lg text-emerald-900 group-hover:translate-x-1 transition">
                →
              </div>
            </Link>

            <Link href="/peminjaman-saya" className="group rounded-2xl bg-white p-5 md:p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="mb-4 md:mb-5 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#eee3d2] text-xl md:text-2xl">
                📋
              </div>
              <h3 className="text-lg md:text-xl font-bold text-emerald-900">
                Peminjaman Saya
              </h3>
              <p className="mt-1.5 md:mt-2 text-xs md:text-sm leading-5 md:leading-6 text-gray-500">
                Cek status pengajuan Anda
              </p>
              <div className="mt-4 md:mt-6 flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-[#eee3d2] text-base md:text-lg text-gray-800 group-hover:translate-x-1 transition">
                →
              </div>
            </Link>

            <Link href="/ajukan-peminjaman" className="group rounded-2xl bg-white p-5 md:p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="mb-4 md:mb-5 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#dfe6d0] text-xl md:text-2xl">
                📝
              </div>
              <h3 className="text-lg md:text-xl font-bold text-emerald-900">
                Ajukan Pinjaman
              </h3>
              <p className="mt-1.5 md:mt-2 text-xs md:text-sm leading-5 md:leading-6 text-gray-500">
                Buat form pengajuan baru
              </p>
              <div className="mt-4 md:mt-6 flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-[#dfe6d0] text-base md:text-lg text-emerald-900 group-hover:translate-x-1 transition">
                →
              </div>
            </Link>

          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-6 md:py-8 text-center mt-auto">
        <p className="text-xs md:text-sm text-gray-500">
          © 2026 Get Ur Gear. All rights reserved.
        </p>
      </footer>
    </div>
  );
}