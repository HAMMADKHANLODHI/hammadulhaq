import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Your login logic here
    return NextResponse.json({ message: "Success" });
}