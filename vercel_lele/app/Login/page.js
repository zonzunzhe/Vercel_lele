import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-emerald-700 px-4"> 
        <h1 className="mb-4 text-3xl font-bold text-white">Get Ur Gear</h1>
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-sm border border-gray-200">
        <h1 className="mb-6 text-center text-xl font-semibold text-emerald-700">Login</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="w-full rounded border border-gray-300 p-2 text-sm text-gray-900 focus:outline-none focus:border-emerald-700"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded border border-gray-300 p-2 text-sm text-gray-900 focus:outline-none focus:border-emerald-700"
            />
          </div>

          <a
            href="/daftar-alat"
            className="block w-full text-center rounded bg-emerald-800 py-2 text-sm text-white font-medium hover:bg-emerald-900 transition"
          >
            Masuk
          </a>
        </div>

        <p className="mt-4 text-center text-xs text-gray-600">
          Belum punya akun?{' '}
          <Link href="/register" className="text-emerald-700 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}