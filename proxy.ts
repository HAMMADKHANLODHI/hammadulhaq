// proxy.ts (Located in your root directory)
import { NextResponse } from "next/server"; 
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  // 1. Initial Protection: If no tokens, redirect to login
  if (!accessToken && !refreshToken) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl); // Use NextResponse
  }

  // 2. Validate Access Token
  if (accessToken) {
    try {
      const { payload } = await jwtVerify(accessToken, secret);
      
      // Strict Admin Role Check
      if (payload.role !== "admin") {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
      
      return NextResponse.next();
    } catch (error) {
      console.log("Access token expired, attempting silent refresh...");
      // Logic continues to refresh block below
    }
  }

  // 3. Silent Refresh Logic
  if (refreshToken) {
    try {
      const refreshResponse = await fetch(`${request.nextUrl.origin}/api/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (refreshResponse.ok) {
        const { newAccessToken, role } = await refreshResponse.json();

        if (role !== "admin") {
          return NextResponse.redirect(new URL("/unauthorized", request.url));
        }

        const response = NextResponse.next();
        
        // Update the access_token cookie
        response.cookies.set("access_token", newAccessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 15, // 15 minutes
          sameSite: "lax",
          path: "/", 
        });

        return response;
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
    }
  }

  // 4. Final Fallback
  const loginUrl = new URL("/auth/login", request.url);
  loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*"],
};