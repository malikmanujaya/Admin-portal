import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  console.log("token",token)
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");

  // If NOT logged in and trying to access a protected route
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  // If logged in and trying to access /auth pages, redirect to dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// Define routes middleware should run on
export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
