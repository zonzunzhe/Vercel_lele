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
        const data = await userApiFetch('/users/15');

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
      const data = await userApiFetch('/users/15', {
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
      alert('Profil berhasil diperbarui!');
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteUser() {
    try {
      await userApiFetch('/users/15', {
        method: 'POST',
        headers: {
          'X-HTTP-Method-Override': 'DELETE',
        },
      });

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