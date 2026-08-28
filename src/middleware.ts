import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = req.nextUrl.pathname === "/admin/login";
  const isApiAuth = req.nextUrl.pathname.startsWith("/api/auth");
  const isLoginApi = req.nextUrl.pathname === "/api/auth/callback/credentials";

  if (isApiAuth || req.nextUrl.pathname.startsWith("/_next") || req.nextUrl.pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  if (isAdminRoute && !isLoginPage) {
    const sessionToken = req.cookies.get("authjs.session-token")?.value ||
                         req.cookies.get("__Secure-authjs.session-token")?.value;
    if (!sessionToken) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  if (isLoginPage) {
    const sessionToken = req.cookies.get("authjs.session-token")?.value ||
                         req.cookies.get("__Secure-authjs.session-token")?.value;
    if (sessionToken) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
