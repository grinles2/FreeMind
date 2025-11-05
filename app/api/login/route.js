import jwt from "jsonwebtoken";

const SECRET = "a3f4c2d8e6f1b7c9d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5";

export async function POST(req) {
  try {
    const { mcUser, password } = await req.json();

    // Пример проверки "БД"
    const users = [
      { mcUser: "Admin", password: "12345678", role: ["Admin"] },
      { mcUser: "Player1", password: "12345678", role: ["Player"] },
    ];

    const user = users.find(u => u.mcUser === mcUser);
    if (!user) return new Response(JSON.stringify({ error: "Пользователь не найден" }), { status: 401 });

    if (user.password !== password)
      return new Response(JSON.stringify({ error: "Неверный пароль" }), { status: 401 });

    const tokenJwt = jwt.sign({ mcUser, role: user.role }, SECRET, { expiresIn: "1h" });

    // Редирект для админа или игрока
    let redirectTo = "/menu";
    if (user.role.includes("Admin") || user.role.includes("Helper")) {
      redirectTo = "/admin_menu";
    }

    const res = new Response(JSON.stringify({ success: true, redirectTo }), { status: 200 });

    // ⚡️ Важно: SameSite=Lax, Path=/, HttpOnly
    res.headers.set(
      "Set-Cookie",
      `token=${tokenJwt}; Path=/; HttpOnly; Max-Age=3600; SameSite=Lax`
    );

    return res;
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
