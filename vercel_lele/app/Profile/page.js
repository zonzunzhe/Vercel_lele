'use client';

import { useEffect, useState } from 'react';
import { userApiFetch } from '@/lib/userApi';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    async function getUser() {
      try {
        // Ambil email yang disimpan saat login
        const userEmail = localStorage.getItem('user_email');

        if (!userEmail) {
          throw new Error('Belum login.');
        }

        // Ambil semua user
        const users = await userApiFetch('/users');

        // Cari user berdasarkan email yang sedang login
        const currentUser = users.find(
          (item) => item.email === userEmail
        );

        if (!currentUser) {
          throw new Error('Data user tidak ditemukan.');
        }

        // Ambil detail user berdasarkan ID
        const data = await userApiFetch(`/users/${currentUser.id}`);

        setUser(data);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
      } catch (error) {
        alert(error.message);
      }
    }

    getUser();
  }, []);

  async function updateUser() {
    try {
      const data = await userApiFetch(`/users/${user.id}`, {
        method: 'POST',
        headers: {
          'X-HTTP-Method-Override': 'PUT',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
        }),
      });

      setUser(data);
      setEdit(false);

      // Update email di localStorage kalau email diubah
      localStorage.setItem('user_email', email);

      alert('Profil berhasil diperbarui!');
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteUser() {
    try {
      await userApiFetch(`/users/${user.id}`, {
        method: 'POST',
        headers: {
          'X-HTTP-Method-Override': 'DELETE',
        },
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_email');

      alert('Akun berhasil dihapus!');
    } catch (error) {
      alert(error.message);
    }
  }

  if (!user) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>

      {edit ? (
        <div className="space-y-4">
          <input
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
          />

          <input
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            className="w-full border p-2 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Nomor Telepon"
          />

          <button
            onClick={updateUser}
            className="bg-emerald-700 text-white px-4 py-2 rounded"
          >
            Simpan
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Nomor Telepon: {user.phone}</p>
          <p>Role: {user.role}</p>

          <button
            onClick={() => setEdit(true)}
            className="bg-emerald-700 text-white px-4 py-2 rounded"
          >
            Edit Profil
          </button>

          <button
            onClick={deleteUser}
            className="bg-red-600 text-white px-4 py-2 rounded ml-2"
          >
            Hapus Akun
          </button>
        </div>
      )}
    </div>
  );
}