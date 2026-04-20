// src/app/api/articles/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, title: "Hello Article" },
  ]);
}



