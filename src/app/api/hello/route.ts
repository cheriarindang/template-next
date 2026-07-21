import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Halo dari API Next.js!",
    timestamp: new Date().toISOString(),
  });
}
