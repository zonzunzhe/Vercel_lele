'use client';

import { logoutAction } from '@/app/actions/auth';

export default function LogoutButton() {
  function handleSubmit() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('session_token');
  }

  return (
    <form action={logoutAction} onSubmit={handleSubmit}>
      <button type="submit" className="text-red-600 hover:text-red-800">Logout</button>
    </form>
  );
}
