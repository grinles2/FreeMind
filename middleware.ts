import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req) {
  console.log("🛡️ [MIDDLEWARE] Проверка авторизации...");

  const token = req.cookies.get("token")?.value;

  if (!token) {
    console.log("❌ Токен отсутствует");
    if (req.nextUrl.pathname.startsWith("/menu")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Токен валиден:", decoded);
    return NextResponse.next();
  } catch (err) {
    console.log("⚠️ Ошибка токена:", err.message);
    if (req.nextUrl.pathname.startsWith("/menu")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }
}

// 🔒 Обрабатываем только эти пути
export const config = {
  matcher: ["/menu/:path*"],
};
