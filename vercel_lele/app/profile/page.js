import Link from 'next/link';
import { cookies } from 'next/headers';
import { apiFetch } from '@/lib/api';
import { updateProfileAction } from '@/app/actions/profile';
import DeleteProfileButton from '@/components/DeleteProfileButton';

function getItems(response) {
  if (Array.isArray(response)) return response;
  return response?.data || [];
}

export default async function ProfilePage({ searchParams }) {
  const params = await searchParams;
  const cookieStore = await cookies();
  if (!cookieStore.get('session_token')?.value) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center p-8 text-center">
        <h1 className="mb-3 text-2xl font-bold text-gray-900">Profil Saya</h1>
        <p className="mb-6 text-gray-600">Silakan login untuk melihat profil dan riwayat peminjaman Anda.</p>
        <Link href="/login" className="rounded bg-emerald-700 px-5 py-2.5 font-semibold text-white hover:bg-emerald-800">
          Login
        </Link>
      </main>
    );
  }
  const userId = cookieStore.get('user_id')?.value;
  if (!userId) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center p-8 text-center">
        <h1 className="mb-3 text-2xl font-bold text-gray-900">Sesi perlu diperbarui</h1>
        <p className="mb-6 text-gray-600">Silakan login kembali agar profile dapat dimuat dengan benar.</p>
        <Link href="/login" className="rounded bg-emerald-700 px-5 py-2.5 font-semibold text-white hover:bg-emerald-800">Login</Link>
      </main>
    );
  }

  let user;
  let rentals = [];
  try {
    user = JSON.parse(cookieStore.get('user_profile')?.value || '{}');
  } catch {
    user = {};
  }

  if (!user?.id && !user?.name && !user?.email) {
    try {
      const profileResponse = await apiFetch(`/users/${userId}`);
      user = profileResponse?.data || profileResponse?.user || profileResponse;
    } catch {
      user = { id: userId };
    }
  }

  try {
    const rentalsResponse = await apiFetch('/rentals');
    rentals = getItems(rentalsResponse).filter((rental) => String(rental.user_id) === String(userId));
  } catch (error) {
    if (!user?.id && !user?.email) {
      return (
        <main className="mx-auto max-w-2xl p-8">
          <h1 className="mb-3 text-2xl font-bold text-gray-900">Profil tidak dapat dimuat</h1>
          <p className="text-red-600">{error.message}</p>
          <Link href="/login" className="mt-5 inline-block text-emerald-700 hover:underline">Login kembali</Link>
        </main>
      );
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 p-4 sm:p-8">
      <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">Profil Saya</h1>
        {params?.updated === '1' && (
          <div role="status" className="mb-5 rounded border border-emerald-200 bg-emerald-50 p-3 font-medium text-emerald-800">
            Profil berhasil diperbarui.
          </div>
        )}
        <form action={updateProfileAction} className="space-y-4">
          <label className="block text-sm font-semibold text-gray-700">
            Nama
            <input name="name" defaultValue={user?.name || ''} required className="mt-1 w-full rounded border p-2" />
          </label>
          <label className="block text-sm font-semibold text-gray-700">
            Email
            <input name="email" type="email" defaultValue={user?.email || ''} required className="mt-1 w-full rounded border p-2" />
          </label>
          <label className="block text-sm font-semibold text-gray-700">
            Nomor Telepon
            <input name="phone" defaultValue={user?.phone || ''} className="mt-1 w-full rounded border p-2" />
          </label>
          <button type="submit" className="rounded bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-800">
            Simpan Profil
          </button>
        </form>
        <DeleteProfileButton />
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-gray-900">Riwayat Peminjaman Saya</h2>
          <Link href="/peminjaman-saya" className="text-sm font-semibold text-emerald-700 hover:underline">Lihat semua</Link>
        </div>
        {rentals.length === 0 ? (
          <p className="text-gray-500">Belum ada riwayat peminjaman.</p>
        ) : (
          <div className="space-y-3">
            {rentals.slice(0, 5).map((rental) => (
              <Link key={rental.id} href={`/detail-peminjaman/${rental.id}`} className="block rounded border p-3 hover:bg-gray-50">
                <div className="flex justify-between gap-3">
                  <span className="font-medium">Peralatan #{rental.equipment_id || rental.alat_id}</span>
                  <span className="text-sm font-semibold">{(rental.status || 'PENDING').toUpperCase()}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{rental.start_date || rental.tanggal_mulai || rental.created_at}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
