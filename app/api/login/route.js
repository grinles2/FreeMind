import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET = "a3f4c2d8e6f1b7c9d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5"; // меняй на env переменную
const repoOwner = "grinles2";
const repoName = "Database";
const filePath = "FM/users.json";
const token = "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";

export async function POST(req) {
  try {
    const { mcUser, password } = await req.json();

    const getUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
    const getRes = await fetch(getUrl, { headers: { Authorization: `token ${token}`, Accept: "application/vnd.github.v3+json" } });
    const fileData = await getRes.json();
    const users = JSON.parse(Buffer.from(fileData.content, "base64").toString("utf-8"));

    const user = users.find(u => u.mcUser === mcUser);
    if (!user) return new Response(JSON.stringify({ error: "Пользователь не найден" }), { status: 401 });

    // Проверяем пароль
    const valid = user.password === password; // если хэширование используешь, то bcrypt.compareSync(password, user.password)
    if (!valid) return new Response(JSON.stringify({ error: "Неверный пароль" }), { status: 401 });

    // Генерация JWT
    const tokenJwt = jwt.sign({ mcUser }, SECRET, { expiresIn: "1h" });

    const res = new Response(JSON.stringify({ success: true }), { status: 200 });
    // Ставим HttpOnly cookie
    res.headers.set("Set-Cookie", `token=${tokenJwt}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`);

    return res;
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
