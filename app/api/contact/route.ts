import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Message";

export async function GET() {
  try{
      await connectToDatabase();
      const contacts = await Contact.find({}).sort({createdAt:1});
      return NextResponse.json({
        success:true,
        data:contacts
      },{status:200})

  }catch(error:any){
    console.error("error in get request : ",e);
    return NextResponse.json(
      {success:false , error:"failed to fetch request"},{status:500}
    )
  }
  

}

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
