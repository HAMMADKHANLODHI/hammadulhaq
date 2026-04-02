import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/login';
import  argon2  from 'argon2';
import { SignJWT } from 'jose';
import { NextResponse } from 'next/server';
import { success } from 'zod';

export async function POST(request: Request) {
    // Your login logic here
    try {
        if (!process.env.JWT_SECRET) {
  throw new Error("CRITICAL: JWT_SECRET is not defined in environment variables.");
}
        await connectToDatabase();
    const body = await request.json();
    console.log("Received Login Data:", body); // Debug: Log incoming data
    
        const { username, password } = body;
        if (!username || !password) {
            return NextResponse.json({ error: "Username and password are required." }, { status: 400 });
        }
        const user = await User.findOne({ username }).select('+password');
        if (!user) {
            return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
        }
        const isPasswordValid = await argon2.verify(user.password, password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
        }
        const accessToken = await new SignJWT({ username: user.username, role: user.role })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('15m')
            .sign(new TextEncoder().encode(process.env.JWT_SECRET));
        console.log("The Id is:", user._id);
            const refreshToken = await new SignJWT({ username: user.username, role: user.role })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('7d')
            .sign(new TextEncoder().encode(process.env.JWT_SECRET));
        
            const response = NextResponse.json({ success: true, message:"Authentication successful.",user:{username:user.username,role:user.role} }, { status: 200 });
        response.cookies.set("access_token", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 15, // 15 minutes
            sameSite: "lax",
            path: "/",
        });
        response.cookies.set("refresh_token", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 7 days
            sameSite: "lax",
            path: "/",
        });
        return response;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("[LOGIN_HANDLER_CRITICAL]:", errorMessage);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
    }
    