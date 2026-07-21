import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-4 py-16">
      <h1 className="text-3xl font-bold">Tentang Template Ini</h1>
      <ul className="mt-6 space-y-3 text-gray-700">
        <li>✅ Next.js 15 (App Router)</li>
        <li>✅ TypeScript</li>
        <li>✅ Tailwind CSS v4</li>
        <li>✅ Struktur folder sederhana & mudah dikembangkan</li>
      </ul>
      <Link
        href="/"
        className="mt-8 text-sm text-blue-600 underline underline-offset-2 hover:text-blue-800"
      >
        ← Kembali
      </Link>
    </main>
  );
}
