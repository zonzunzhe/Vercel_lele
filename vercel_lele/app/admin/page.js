import { apiFetch } from '@/lib/api';
import { requireAdmin } from '@/lib/auth';
import { createAdminUserAction, updateAdminUserAction } from '@/app/actions/admin';
import AdminDeleteUserButton from '@/components/AdminDeleteUserButton';
import StatusActions from '@/components/StatusActions';
import StatusBadge from '@/components/StatusBadge';
import Link from 'next/link';

function items(response) {
  if (Array.isArray(response)) return response;
  return response?.data || [];
}

export default async function AdminPage({ searchParams }) {
  const params = await searchParams;
  try {
    await requireAdmin();
  } catch {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center p-8 text-center">
        <h1 className="mb-3 text-2xl font-bold text-gray-900">Akses Ditolak</h1>
        <p className="text-gray-600">Halaman ini hanya dapat diakses oleh admin.</p>
      </main>
    );
  }

  const [usersResponse, rentalsResponse] = await Promise.all([
    apiFetch('/users'),
    apiFetch('/rentals', { cache: 'no-store' }),
  ]);
  const users = items(usersResponse);
  const rentals = items(rentalsResponse);
  const pending = rentals.filter((rental) => String(rental.status).toLowerCase() === 'pending').length;
  const success = params?.success;

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 bg-gray-50 p-4 sm:p-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">Admin Console</p>
        <h1 className="mt-1 text-3xl font-bold text-gray-900">Manajemen Platform</h1>
        <p className="mt-2 text-gray-600">Kelola pengguna dan pantau aktivitas peminjaman secara real-time.</p>
      </header>

      {success && <div role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 font-medium text-emerald-800">Pengguna berhasil {success === 'created' ? 'ditambahkan' : success === 'updated' ? 'diperbarui' : 'dihapus'}.</div>}

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">Total Pengguna</p><p className="mt-2 text-3xl font-bold text-emerald-800">{users.length}</p></div>
        <div className="rounded-xl border bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">Total Peminjaman</p><p className="mt-2 text-3xl font-bold text-emerald-800">{rentals.length}</p></div>
        <div className="rounded-xl border bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">Menunggu Persetujuan</p><p className="mt-2 text-3xl font-bold text-amber-600">{pending}</p></div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Riwayat Peminjaman</h2>
        {rentals.length === 0 ? (
          <p className="py-6 text-center text-sm text-gray-500">Belum ada data peminjaman dari API.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1350px] border-collapse text-left text-sm text-gray-800">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-100 text-xs font-bold uppercase text-gray-700">
                  <th className="px-3 py-3">ID</th>
                  <th className="px-3 py-3">Peminjam</th>
                  <th className="px-3 py-3">Alat</th>
                  <th className="px-3 py-3">Jumlah</th>
                  <th className="px-3 py-3">Tanggal Mulai</th>
                  <th className="px-3 py-3">Tanggal Selesai</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Approval Admin</th>
                </tr>
              </thead>
              <tbody>
                {rentals.map((rental) => (
                  <tr key={rental.id} className="border-b border-gray-200 hover:bg-emerald-50/50">
                    <td className="whitespace-nowrap px-3 py-3 font-semibold">
                      <Link href={`/detail-peminjaman/${rental.id}`} className="text-base font-bold text-emerald-800 underline-offset-2 hover:underline">#{rental.id}</Link>
                    </td>
                    <td className="px-3 py-3">
                      {rental.user_name || rental.user?.name || `User #${rental.user_id ?? '—'}`}
                    </td>
                    <td className="px-3 py-3">
                      {rental.equipment_name || rental.nama_alat || rental.alat?.nama || `Alat #${rental.equipment_id ?? rental.alat_id ?? '—'}`}
                    </td>
                    <td className="px-3 py-3">{rental.quantity ?? rental.jumlah ?? '—'}</td>
                    <td className="whitespace-nowrap px-3 py-3">{rental.start_date || rental.tanggal_mulai || rental.tanggal_pinjam || '—'}</td>
                    <td className="whitespace-nowrap px-3 py-3">{rental.end_date || rental.tanggal_selesai || rental.tanggal_kembali || '—'}</td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <StatusBadge status={String(rental.status || 'PENDING').toUpperCase()} />
                    </td>
                    <td className="px-3 py-2">
                      <StatusActions
                        peminjamanId={rental.id}
                        currentStatus={String(rental.status || 'PENDING').toUpperCase()}
                        userRole="ADMIN"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-xl font-bold text-gray-900">Tambah Pengguna</h2>
        <form action={createAdminUserAction} className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <input name="name" required placeholder="Nama" className="rounded border p-2.5" />
          <input name="email" required type="email" placeholder="Email" className="rounded border p-2.5" />
          <input name="phone" required placeholder="Telepon" className="rounded border p-2.5" />
          <input name="password" required type="password" placeholder="Password" className="rounded border p-2.5" />
          <div className="flex gap-2"><select name="role" className="min-w-0 flex-1 rounded border p-2.5"><option value="user">User</option><option value="admin">Admin</option></select><button className="rounded bg-emerald-700 px-4 py-2.5 font-semibold text-white hover:bg-emerald-800">Tambah</button></div>
        </form>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Daftar Pengguna</h2>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="rounded-lg border p-4">
              <form action={updateAdminUserAction} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
                <input type="hidden" name="id" value={user.id} />
                <label className="text-sm font-semibold text-gray-700">Nama<input name="name" defaultValue={user.name || ''} required className="mt-1 w-full rounded border p-2" /></label>
                <label className="text-sm font-semibold text-gray-700">Email<input name="email" type="email" defaultValue={user.email || ''} required className="mt-1 w-full rounded border p-2" /></label>
                <label className="text-sm font-semibold text-gray-700">Telepon<input name="phone" defaultValue={user.phone || ''} className="mt-1 w-full rounded border p-2" /></label>
                <label className="text-sm font-semibold text-gray-700">Role<select name="role" defaultValue={user.role || 'user'} className="mt-1 w-full rounded border p-2"><option value="user">User</option><option value="admin">Admin</option></select></label>
                <button className="rounded bg-emerald-700 px-3 py-2 font-semibold text-white hover:bg-emerald-800">Simpan</button>
              </form>
              <AdminDeleteUserButton userId={user.id} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
