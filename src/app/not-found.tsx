import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="mt-4 text-lg text-gray-600">Halaman tidak ditemukan</p>
      <Link
        href="/"
        className="mt-6 text-sm text-blue-600 underline underline-offset-2 hover:text-blue-800"
      >
        ← Kembali ke beranda
      </Link> 
    </main>
  );
}
