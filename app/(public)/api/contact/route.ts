import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Message";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await Contact.create({ name, email, subject, message });

    return NextResponse.json(
      { success: true, message: "Message saved successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Contact API error:", error.message);
    if (error.name === "ValidationError") {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
