import { NextResponse } from "next/server";

import { AuthSchema } from "@/lib/schemas/auth"; // Your Zod Schema

import User from "@/models/signup";
import { connectToDatabase } from "@/lib/mongodb";
import argon2 from "argon2";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Received Signup Data:", body); // Debug: Log incoming data
        const validation = AuthSchema.safeParse(body);
        if (!validation.success) {
            console.error("Validation Errors:", validation.error.format());
            return NextResponse.json({ error: "Invalid input", details: validation.error.format() }, { status: 400 });
        } else {
            // return NextResponse.json({ message: "Validation successful", details: validation }, { status: 200 });
            const { username, password } = validation.data;
            try {
                
                await connectToDatabase();
                const existingUser = await User.findOne({ username: validation.data.username });
                if (existingUser) {
                    return NextResponse.json({ error: "Username already exists." }, { status: 400 });
                }
                const hashedPassword = await argon2.hash(validation.data.password,{
                    type:argon2.argon2id,
                    memoryCost: 2 ** 16, // 64 MB
                    timeCost: 5,
                    parallelism: 1
                });


                
                await User.create({ 
                    username: validation.data.username, 
                    role: "admin",
                    password: hashedPassword,
                     
                });
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