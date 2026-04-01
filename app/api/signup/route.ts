import { NextResponse } from "next/server";
import { SecurityEngine } from "@/lib/auth-util";
import { AuthSchema } from "@/lib/schemas/auth"; // Your Zod Schema
import { connect } from "node:http2";
import User from "@/models/signup";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validation = AuthSchema.safeParse(body);
        if (!validation.success) {
            console.error("Validation Errors:", validation.error.format());
            return NextResponse.json({ error: "Invalid input", details: validation.error.format() }, { status: 400 });
        } else {
            // return NextResponse.json({ message: "Validation successful", details: validation }, { status: 200 });
            try {
                await connectToDatabase();
                // This interprets :string as "rename username to string"
                const { username, password } = validation.data as { username: string; password: string };
                if (!username || !password) {
                    return NextResponse.json({ error: "Username and password are required." }, { status: 400 });
                }
                await User.create({ username, password });
                return NextResponse.json({ success: true, message: "User registered successfully." }, { status: 201 });
            } catch (error) {   

                const errorMessage = error instanceof Error ? error.message : "Unknown error";
                console.error("[DATABASE_ERROR]:", errorMessage);
                return NextResponse.json(
                    { error: "Internal Server Error" },
                    { status: 500 }
                );
            }
        
            }

    }
    catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            console.error("[SIGNUP_HANDLER_CRITICAL]:", errorMessage);

            // FIX: Return a response in the catch block to prevent the 500 Route Handler error
            return NextResponse.json(
                { error: "Internal Server Error,e" },
                { status: 500 }
            );

        }

    }