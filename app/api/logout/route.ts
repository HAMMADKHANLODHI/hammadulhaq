import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      { success: true, message: "Session Terminated" },
      { status: 200 }
    );

    // Standard Cookie Options for security
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax" as const,
      path: "/",
      expires: new Date(0), // Expire immediately
    };

    // Clear both tokens
    response.cookies.set("access_token", "", cookieOptions);
    response.cookies.set("refresh_token", "", cookieOptions);

    // Gold Standard: Clear Site Data Header
    // This tells the browser to wipe cache and storage for your origin
    response.headers.set("Clear-Site-Data", '"cookies", "storage"');

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}