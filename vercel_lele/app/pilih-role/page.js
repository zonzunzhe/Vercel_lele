import Link from 'next/link';

export default function PilihRolePage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 p-4 sm:p-8">
      <section className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-emerald-900">Masuk ke Get Ur Gear</h1>
          <p className="mt-2 text-gray-600">Pilih peran Anda untuk melanjutkan.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/login" className="rounded-xl border-2 border-emerald-100 p-6 transition hover:border-emerald-600 hover:bg-emerald-50">
            <span className="text-4xl" aria-hidden="true">👤</span>
            <h2 className="mt-4 text-xl font-bold text-gray-900">User</h2>
            <p className="mt-2 text-sm text-gray-600">Akses katalog dan kelola peminjaman Anda.</p>
          </Link>
          <Link href="/login/admin" className="rounded-xl border-2 border-amber-100 p-6 transition hover:border-amber-500 hover:bg-amber-50">
            <span className="text-4xl" aria-hidden="true">🛡️</span>
            <h2 className="mt-4 text-xl font-bold text-gray-900">Admin</h2>
            <p className="mt-2 text-sm text-gray-600">Kelola pengguna dan pantau operasional platform.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
