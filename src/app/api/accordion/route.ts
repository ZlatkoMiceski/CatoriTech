import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { category: "Cat1", question: "quest1", answer: "answer1" },
    { category: "Cat2", question: "quest2", answer: "answer2" },
    { category: "Cat3", question: "quest3", answer: "answer3" },
  ]);
}
