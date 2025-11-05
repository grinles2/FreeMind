import jwt from "jsonwebtoken";

const SECRET = "a3f4c2d8e6f1b7c9d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5";
const repoOwner = "grinles2";
const repoName = "Database";
const filePath = "FM/users.json";
const token = "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"; // GitHub token

const headers = {
  Authorization: `token ${token}`,
  Accept: "application/vnd.github.v3+json",
  "Content-Type": "application/json",
};

export async function POST(req) {
  try {
    const { mcUser, password } = await req.json();

    if (!mcUser || !password) {
      return new Response(JSON.stringify({ error: "Неверные данные" }), { status: 400 });
    }

    // 1️⃣ Получаем файл с GitHub
    const getUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
    const getRes = await fetch(getUrl, { headers });
    if (!getRes.ok) {
      return new Response(JSON.stringify({ error: `Ошибка GitHub: ${getRes.status}` }), { status: getRes.status });
    }

    const fileData = await getRes.json();
    const contentText = Buffer.from(fileData.content, "base64").toString("utf-8");
    const users = JSON.parse(contentText);

    // 2️⃣ Проверяем, нет ли уже пользователя
    if (users.find(u => u.mcUser === mcUser)) {
      return new Response(JSON.stringify({ error: "Пользователь уже существует" }), { status: 400 });
    }

    // 3️⃣ Добавляем нового пользователя
    const newUser = {
      mcUser,
      password,
      role: ["Player"],
      verified: "false",
      active: "true",
    };
    users.push(newUser);

    // 4️⃣ Отправляем обновление на GitHub
    const updatedContent = Buffer.from(JSON.stringify(users, null, 2)).toString("base64");
    const putRes = await fetch(getUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: `Добавлен пользователь ${mcUser}`,
        content: updatedContent,
        sha: fileData.sha,
      }),
    });

    if (!putRes.ok) {
      return new Response(JSON.stringify({ error: `Ошибка обновления: ${putRes.status}` }), { status: putRes.status });
    }

    // 5️⃣ Генерируем JWT токен
    const tokenJwt = jwt.sign({ mcUser, role: ["Player"] }, SECRET, { expiresIn: "1h" });

    // 6️⃣ Устанавливаем cookie и отправляем redirectTo
    const res = new Response(
      JSON.stringify({ success: true, redirectTo: "/menu" }),
      { status: 200 }
    );
    res.headers.set(
      "Set-Cookie",
      `token=${tokenJwt}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
    );

    return res;
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
