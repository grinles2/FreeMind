// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "default_secret";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value;

  if (!token) {
    // Если токена нет, редирект на login
    if (req.nextUrl.pathname.startsWith("/menu") || req.nextUrl.pathname.startsWith("/admin_menu")) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  try {
    const decoded: any = jwt.verify(token, SECRET);
    req.nextUrl.searchParams.set("user", JSON.stringify({ mcUser: decoded.mcUser, role: decoded.role }));

    // Пример проверки ролей
    const isAdminPage = req.nextUrl.pathname.startsWith("/admin_menu");
    const isUserPage = req.nextUrl.pathname.startsWith("/menu");

    if (isAdminPage && !decoded.role.includes("Admin") && !decoded.role.includes("Helper")) {
      url.pathname = "/menu"; // обычный игрок не в админку
      return NextResponse.redirect(url);
    }

    if (isUserPage && decoded.role.includes("Admin")) {
      url.pathname = "/admin_menu"; // админ не в обычную меню
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (err: any) {
    if (req.nextUrl.pathname.startsWith("/menu") || req.nextUrl.pathname.startsWith("/admin_menu")) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/menu/:path*", "/admin_menu/:path*"],
};
