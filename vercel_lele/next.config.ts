import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.104'],
  async redirects() {
    return [
      // { source: "/Login", destination: "/login", permanent: true },
      // { source: "/Register", destination: "/register", permanent: true },
      { source: "/Profile", destination: "/profile", permanent: true },
      { source: "/Detail-Alat", destination: "/detail-alat", permanent: true },
      { source: "/Detail Alat", destination: "/detail-alat", permanent: true },
      { source: "/Ajukan Peminjaman", destination: "/ajukan-peminjaman", permanent: true },
      { source: "/Daftar Alat", destination: "/daftar-alat", permanent: true },
    ];
  },
};

export default nextConfig;
