import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: 'Some Data to display', email: "some@email.com", address: "some Address" });
}