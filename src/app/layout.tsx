import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Template Next.js",
  description: "Template Next.js sederhana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
