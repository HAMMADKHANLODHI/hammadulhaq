import { NextResponse } from "next/server";
import { AuthSchema } from "@/lib/schemas/auth"; 
import User from "@/models/signup";
import { connectToDatabase } from "@/lib/mongodb";
import argon2 from "argon2";

// Define the allowed emails
const ALLOWED_EMAILS = ["hammad786052@gmail.com", "hammadulhaqlodhi@gmail.com"];

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validation = AuthSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { error: "Invalid input", details: validation.error.format() }, 
                { status: 400 }
            );
        }

        const { username, password } = validation.data;

        // --- NEW RESTRICTION LOGIC ---
        // Check if the provided username/email is in the whitelist
        if (!ALLOWED_EMAILS.includes(username.toLowerCase())) {
            return NextResponse.json(
                { error: "Access denied. This email is not authorized to sign up." }, 
                { status: 403 } // 403 Forbidden is appropriate here
            );
        }
        // -----------------------------

        try {
            await connectToDatabase();
            
            const existingUser = await User.findOne({ username: username.toLowerCase() });
            if (existingUser) {
                return NextResponse.json({ error: "Username already exists." }, { status: 400 });
            }

            const hashedPassword = await argon2.hash(password, {
                type: argon2.argon2id,
                memoryCost: 2 ** 16, 
                timeCost: 5,
                parallelism: 1
            });

            await User.create({ 
                username: username.toLowerCase(), // Store in lowercase for consistency
                role: "admin",
                password: hashedPassword,
            });

            return NextResponse.json(
                { success: true, message: "User registered successfully." }, 
                { status: 201 }
            );

        } catch (error) { 
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            console.error("[DATABASE_ERROR]:", errorMessage);
            return NextResponse.json(
                { error: "Internal Server Error" },
                { status: 500 }
            );
        }

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("[SIGNUP_HANDLER_CRITICAL]:", errorMessage);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}