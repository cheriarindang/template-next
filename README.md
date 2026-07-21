# Template Next.js Sederhana

Struktur project minimal untuk memulai aplikasi Next.js.

## Memulai

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur Folder

```
src/
├── app/                  # App Router (halaman & API)
│   ├── about/            # Halaman /about
│   ├── api/hello/        # API route /api/hello
│   ├── globals.css       # Global styles (Tailwind)
│   ├── layout.tsx        # Layout root
│   ├── page.tsx          # Halaman beranda /
│   └── not-found.tsx     # Halaman 404
├── components/           # Komponen UI (buat di sini)
└── lib/                  # Utility functions
```

## Scripts

| Perintah         | Fungsi              |
| ---------------- | ------------------- |
| `npm run dev`    | Development server  |
| `npm run build`  | Build production    |
| `npm run start`  | Jalankan production |
| `npm run lint`   | Cek kode            |
# template-next
