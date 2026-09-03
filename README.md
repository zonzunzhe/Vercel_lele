<div align="center">

# 🏕️ GET UR GEAR

### _Adventure Starts With The Right Gear._

**Platform rental & peminjaman alat camping outdoor.**

[![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](#)
[![Made With](https://img.shields.io/badge/made%20with-love-red?style=for-the-badge)](#)
[![Camping](https://img.shields.io/badge/outdoor-camping-green?style=for-the-badge)](#)

<br>

> 🏕️ **Sewa alat. Bawa petualangan. Ciptakan cerita.**

<br>

[🚀 Getting Started](#-getting-started) •
[✨ Features](#-features) •
[🛠️ Tech Stack](#️-tech-stack) •
[🎮 DOOM 1998](#-secret-room-doom-1998) •
[🤝 Contributing](#-contributing)

</div>

---

# 🌲 About The Project

**GET UR GEAR** adalah aplikasi web untuk mempermudah proses rental dan peminjaman peralatan camping outdoor secara terstruktur dan mudah aplikasi berbasis web.

Daripada harus membeli semua perlengkapan untuk satu perjalanan, pengguna cukup memilih peralatan yang dibutuhkan, menentukan tanggal peminjaman, dan melakukan booking.

### 🎯 Tujuan

---

## Mempermudah sistem peminjaman dari manual ke yang lebih digital,sistem ini dibuat se-transparan mungkin kepada pengguna untuk melihat status perlengkapan barang yang ingin disewa sehingga meminamilisir kebingungan pengguna.

### 🛠️ Fitur

# 1. Authentication

Pengguna dapat melakukan:

* Register akun
* Login
* Logout
* Pengelolaan akun pengguna

Sistem memiliki pembagian role:

* User: dapat mengajukan dan melihat peminjaman
* Admin: dapat mengelola alat dan melakukan approval peminjaman

# 2. Daftar Alat Outdoor

Pengguna dapat melihat daftar alat yang tersedia untuk dipinjam.

Informasi alat meliputi:

* Nama alat
* Kategori
* Deskripsi
* Jumlah/stok
* Kondisi alat
* Status ketersediaan
* Foto alat

Contoh alat:

* Tenda
* Sleeping bag
* Carrier
* Kompor portable
* Matras
* Trekking pole
* Headlamp

# 3. Pengajuan Peminjaman

Pengguna dapat mengajukan peminjaman dengan mengisi:

* Alat yang ingin dipinjam
* Jumlah alat
* Tanggal peminjaman
* Tanggal pengembalian
* Keperluan peminjaman
* Catatan tambahan

Setelah pengajuan dikirim, status peminjaman akan menjadi Menunggu Approval.

# 4. Daftar Status Peminjaman

Pengguna dapat melihat daftar peminjaman yang pernah diajukan beserta statusnya.

Status peminjaman:

* Menunggu: pengajuan belum diproses admin
* Disetujui: pengajuan diterima admin
* Ditolak: pengajuan ditolak admin
* Sedang Dipinjam: alat sedang digunakan
* Selesai: alat telah dikembalikan

Pengguna juga dapat melihat detail dari setiap pengajuan.

# 5. Approval Management

Admin dapat melihat seluruh pengajuan peminjaman yang masuk.

Admin dapat:

* Melihat detail pengajuan
* Menyetujui peminjaman
* Menolak peminjaman
* Memberikan alasan penolakan
* Mengubah status peminjaman
* Melihat riwayat peminjaman

# 6. Management Alat

Admin dapat mengelola data alat outdoor, seperti:

* Menambahkan alat
* Mengubah informasi alat
* Menghapus alat
* Mengubah jumlah/stok alat
* Mengubah kondisi alat
* Mengatur status ketersediaan alat

# Alur Sistem

## User

1. User melakukan register/login.
2. User melihat daftar alat outdoor.
3. User memilih alat yang ingin dipinjam.
4. User mengisi form pengajuan peminjaman.
5. User mengirim pengajuan.
6. Pengajuan masuk ke sistem dengan status Menunggu.
7. User menunggu proses approval dari admin.
8. User dapat melihat status pengajuan.
9. Jika disetujui, alat dapat dipinjam.
10. Setelah alat dikembalikan, status berubah menjadi Selesai.

## Admin

1. Admin melakukan login.
2. Admin melihat dashboard.
3. Admin melihat daftar pengajuan peminjaman.
4. Admin memeriksa detail pengajuan.
5. Admin menyetujui atau menolak pengajuan.
6. Jika disetujui, stok alat diperbarui.
7. Admin dapat mengelola data alat dan melihat riwayat peminjaman.

# Role Pengguna

Role| Hak Akses
User| Melihat alat, mengajukan peminjaman, melihat status peminjaman
Admin| Mengelola alat, melihat pengajuan, approval peminjaman, melihat riwayat

# Teknologi

Teknologi yang digunakan dalam project ini:

* Frontend: ...
* Backend: ...
* Database: ...
* Authentication: ...
* Deployment: ...

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/camprent.git
cd camprent

```

### 2. Package Install
```bash
npm install
```

### 3. Run Program
```bash
npm run dev
```

