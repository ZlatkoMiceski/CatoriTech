import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { title: "Title One", subtitle: "subtitle One", image: "https://picsum.photos/seed/picsum/200/300" },
    { title: "Title Two", subtitle: "subtitle Two", image: "https://picsum.photos/seed/picsum/200/300" },
  ]);
}