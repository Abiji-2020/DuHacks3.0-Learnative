import { OpenAI } from "openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const openai = new OpenAI({ apiKey: "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" });
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("API key not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
