import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        👋 Halo, Next.js!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Template sederhana dengan App Router + Tailwind CSS
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/about"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Tentang
        </Link>
        <Link
          href="/api/hello"
          className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Coba API
        </Link>
      </div>
    </main>
  );
}
