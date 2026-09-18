// // import Link from 'next/link';

// // export default function HalamanUtama() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
// //       <h1 className="text-4xl font-bold text-gray-900 mb-4">Sistem Peminjaman Alat</h1>
// //       <p className="text-gray-600 mb-8 text-center max-w-md">
// //         Pilih menu di bawah untuk mengelola peminjaman Anda.
// //       </p>
      
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
// //         <Link href="/daftar-alat" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
// //           <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Daftar Alat</h2>
// //           <p className="text-sm text-gray-500">Lihat katalog barang yang tersedia</p>
// //         </Link>
        
// //         <Link href="/peminjaman-saya" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
// //           <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Peminjaman Saya</h2>
// //           <p className="text-sm text-gray-500">Cek status pengajuan Anda</p>
// //         </Link>

// //         <Link href="/Ajukan Peminjaman" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
// //           <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Ajukan Pinjaman</h2>
// //           <p className="text-sm text-gray-500">Buat form pengajuan baru</p>
// //         </Link>

// //         <Link href="/Login" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
// //           <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Autentikasi</h2>
// //           <p className="text-sm text-gray-500">Masuk atau daftar akun baru</p>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }

// import Link from 'next/link';

// export default function HalamanUtama() {
//   return (
//     <div className="min-h-screen bg-[#f5f3ee] text-gray-800">

//       {/* ================= NAVBAR ================= */}
//       <nav className="flex items-center justify-between px-8 py-5 md:px-12 bg-[#f5f3ee]">
        
//         {/* Logo */}
//         <div>
//           <h1 className="text-2xl font-bold text-emerald-900">
//             Get Ur Gear
//           </h1>
//           <p className="text-xs tracking-[0.2em] text-gray-500">
//             RENT • EXPLORE • REPEAT
//           </p>
//         </div>

// <<<<<<< HEAD
//         <Link href="/ajukan-peminjaman" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
//           <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Ajukan Pinjaman</h2>
//           <p className="text-sm text-gray-500">Buat form pengajuan baru</p>
//         </Link>

//         <Link href="/login" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-emerald-600 hover:shadow-md transition text-center group">
//           <h2 className="text-xl font-semibold text-emerald-700 mb-2 group-hover:text-emerald-800">Autentikasi</h2>
//           <p className="text-sm text-gray-500">Masuk atau daftar akun baru</p>
//         </Link>
//       </div>
// =======
//         {/* Menu */}
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium">
//           <Link
//             href="/"
//             className="text-emerald-800 border-b-2 border-emerald-800 pb-1"
//           >
//             Home
//           </Link>

//           <Link
//             href="/daftar-alat"
//             className="text-gray-600 hover:text-emerald-800 transition"
//           >
//             Daftar Alat
//           </Link>

//           <Link
//             href="/peminjaman-saya"
//             className="text-gray-600 hover:text-emerald-800 transition"
//           >
//             Peminjaman Saya
//           </Link>

//           <Link
//             href="/ajukan-peminjaman"
//             className="text-gray-600 hover:text-emerald-800 transition"
//           >
//             Ajukan Pinjaman
//           </Link>

//           <Link
//             href="/Login"
//             className="text-gray-600 hover:text-emerald-800 transition"
//           >
//             Autentikasi
//           </Link>
//         </div>
//       </nav>


//       {/* ================= HERO ================= */}
//       <section className="px-6 md:px-12 py-8">
        
//         <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#e9e6dc]">
          
//           <div className="grid md:grid-cols-2 min-h-[500px]">

//             {/* Bagian kiri */}
//             <div className="flex flex-col justify-center px-8 py-12 md:px-14 lg:px-20">

//               <div className="mb-5 inline-block w-fit rounded-full bg-[#d9dfc9] px-4 py-2 text-sm font-medium text-emerald-900">
//                 🌲 Gear Rental for Your Next Adventure
//               </div>

//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-emerald-950">
//                 Temukan Gear Terbaik
//                 <br />
//                 untuk Setiap
//                 <br />
//                 Petualanganmu
//               </h2>

//               <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
//                 Pinjam perlengkapan outdoor dengan mudah,
//                 aman, dan praktis. Mulai dari camping,
//                 hiking, hingga kegiatan alam lainnya.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-4">

//                 <Link
//                   href="/daftar-alat"
//                   className="rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-900 transition"
//                 >
//                   Jelajahi Gear →
//                 </Link>

//                 <Link
//                   href="/peminjaman-saya"
//                   className="rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-white transition"
//                 >
//                   Peminjaman Saya
//                 </Link>

//               </div>
//             </div>


//             {/* Bagian kanan - gambar */}
//             <div className="relative min-h-[350px] md:min-h-full">

//               <img
//                 src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80"
//                 alt="Camping outdoor"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               {/* Tulisan di atas gambar */}
//               <div className="absolute right-6 top-6 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-900 backdrop-blur-sm">
//                 Good Gear, Better Journey
//               </div>

//             </div>

//           </div>
//         </div>

//       </section>


//       {/* ================= FITUR ================= */}
//       <section className="px-6 md:px-12 py-16">

//         <div className="mx-auto max-w-7xl">

//           {/* Judul */}
//           <div className="mb-10 text-center">

//             <p className="mb-3 text-sm font-semibold tracking-widest text-emerald-700">
//               — MULAI DARI SINI —
//             </p>

//             <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">
//               Kelola Peminjamanmu dengan Mudah
//             </h2>

//             <p className="mt-3 text-gray-500">
//               Pilih menu di bawah untuk mengelola peminjaman Anda.
//             </p>

//           </div>


//           {/* 4 fitur */}
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">


//             {/* Daftar Alat */}
//             <Link
//               href="/daftar-alat"
//               className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition"
//             >

//               <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe6d0] text-2xl">
//                 ⛺
//               </div>

//               <h3 className="text-xl font-bold text-emerald-900">
//                 Daftar Alat
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Lihat katalog barang yang tersedia
//               </p>

//               <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe6d0] text-lg text-emerald-900 group-hover:translate-x-1 transition">
//                 →
//               </div>

//             </Link>


//             {/* Peminjaman Saya */}
//             <Link
//               href="/peminjaman-saya"
//               className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition"
//             >

//               <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#eee3d2] text-2xl">
//                 📋
//               </div>

//               <h3 className="text-xl font-bold text-emerald-900">
//                 Peminjaman Saya
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Cek status pengajuan Anda
//               </p>

//               <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#eee3d2] text-lg text-gray-800 group-hover:translate-x-1 transition">
//                 →
//               </div>

//             </Link>


//             {/* Ajukan Pinjaman */}
//             <Link
//               href="/ajukan-peminjaman"
//               className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition"
//             >

//               <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe6d0] text-2xl">
//                 📝
//               </div>

//               <h3 className="text-xl font-bold text-emerald-900">
//                 Ajukan Pinjaman
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Buat form pengajuan baru
//               </p>

//               <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe6d0] text-lg text-emerald-900 group-hover:translate-x-1 transition">
//                 →
//               </div>

//             </Link>


//             {/* Autentikasi */}
//             <Link
//               href="/Login"
//               className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition"
//             >

//               <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#eee3d2] text-2xl">
//                 👤
//               </div>

//               <h3 className="text-xl font-bold text-emerald-900">
//                 Autentikasi
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Masuk atau daftar akun baru
//               </p>

//               <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#eee3d2] text-lg text-gray-800 group-hover:translate-x-1 transition">
//                 →
//               </div>

//             </Link>

//           </div>
//         </div>

//       </section>


//       {/* ================= FOOTER ================= */}
//       <footer className="border-t border-gray-200 px-6 py-8 text-center">

//         <p className="text-sm text-gray-500">
//           © 2026 Get Ur Gear. All rights reserved.
//         </p>

//       </footer>

// >>>>>>> 48951cd (feat: update homepage design)
//     </div>
//   );
// }

import Link from 'next/link';

export default function HalamanUtama() {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-gray-800">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-8 py-5 md:px-12 bg-[#f5f3ee]">
        
        {/* Logo */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-900">
            Get Ur Gear
          </h1>
          <p className="text-xs tracking-[0.2em] text-gray-500">
            RENT • EXPLORE • REPEAT
          </p>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="text-emerald-800 border-b-2 border-emerald-800 pb-1"
          >
            Home
          </Link>

          <Link
            href="/daftar-alat"
            className="text-gray-600 hover:text-emerald-800 transition"
          >
            Daftar Alat
          </Link>

          <Link
            href="/peminjaman-saya"
            className="text-gray-600 hover:text-emerald-800 transition"
          >
            Peminjaman Saya
          </Link>

          <Link
            href="/ajukan-peminjaman"
            className="text-gray-600 hover:text-emerald-800 transition"
          >
            Ajukan Pinjaman
          </Link>

          <Link
            href="/login"
            className="text-gray-600 hover:text-emerald-800 transition"
          >
            Login
          </Link>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="px-6 md:px-12 py-8">
        
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#e9e6dc]">
          
          <div className="grid md:grid-cols-2 min-h-[500px]">

            {/* Bagian kiri */}
            <div className="flex flex-col justify-center px-8 py-12 md:px-14 lg:px-20">

              <div className="mb-5 inline-block w-fit rounded-full bg-[#d9dfc9] px-4 py-2 text-sm font-medium text-emerald-900">
                🌲 Gear Rental for Your Next Adventure
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-emerald-950">
                Adventure Starts
                <br />
                With The Right
                <br />
                Gear.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
                Pinjam perlengkapan outdoor dengan mudah,
                aman, dan praktis. Mulai dari camping,
                hiking, hingga kegiatan alam lainnya.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="/daftar-alat"
                  className="rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-900 transition"
                >
                  Jelajahi Gear →
                </Link>

                <Link
                  href="/peminjaman-saya"
                  className="rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-white transition"
                >
                  Peminjaman Saya
                </Link>

              </div>
            </div>


            {/* Bagian kanan - gambar */}
            <div className="relative min-h-[350px] md:min-h-full">

              <img
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80"
                alt="Camping outdoor"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute right-6 top-6 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-900 backdrop-blur-sm">
                Good Gear, Better Journey
              </div>

            </div>

          </div>
        </div>

      </section>


      {/* ================= FITUR ================= */}
      <section className="px-6 md:px-12 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <p className="mb-3 text-sm font-semibold tracking-widest text-emerald-700">
              — MULAI DARI SINI —
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">
              Kelola Peminjamanmu dengan Mudah
            </h2>

            <p className="mt-3 text-gray-500">
              Pilih menu di bawah untuk mengelola peminjaman Anda.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Daftar Alat */}
            <Link
              href="/daftar-alat"
              className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe6d0] text-2xl">
                ⛺
              </div>

              <h3 className="text-xl font-bold text-emerald-900">
                Daftar Alat
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Lihat katalog barang yang tersedia
              </p>

              <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe6d0] text-lg text-emerald-900 group-hover:translate-x-1 transition">
                →
              </div>

            </Link>


            {/* Peminjaman Saya */}
            <Link
              href="/peminjaman-saya"
              className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#eee3d2] text-2xl">
                📋
              </div>

              <h3 className="text-xl font-bold text-emerald-900">
                Peminjaman Saya
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Cek status pengajuan Anda
              </p>

              <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#eee3d2] text-lg text-gray-800 group-hover:translate-x-1 transition">
                →
              </div>

            </Link>


            {/* Ajukan Pinjaman */}
            <Link
              href="/ajukan-peminjaman"
              className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe6d0] text-2xl">
                📝
              </div>

              <h3 className="text-xl font-bold text-emerald-900">
                Ajukan Pinjaman
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Buat form pengajuan baru
              </p>

              <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe6d0] text-lg text-emerald-900 group-hover:translate-x-1 transition">
                →
              </div>

            </Link>


            {/* Login */}
            <Link
              href="/login"
              className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#eee3d2] text-2xl">
                👤
              </div>

              <h3 className="text-xl font-bold text-emerald-900">
                Login
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Masuk atau daftar akun baru
              </p>

              <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#eee3d2] text-lg text-gray-800 group-hover:translate-x-1 transition">
                →
              </div>

            </Link>

          </div>
        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center">

        <p className="text-sm text-gray-500">
          © 2026 Get Ur Gear. All rights reserved.
        </p>

      </footer>

    </div>
  );
}