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

    // 1. Получаем текущий файл с GitHub
    const getUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
    const getRes = await fetch(getUrl, { headers });
    if (!getRes.ok) {
      return new Response(JSON.stringify({ error: `Ошибка GitHub: ${getRes.status}` }), { status: getRes.status });
    }

    const fileData = await getRes.json();
    const contentBase64 = fileData.content;
    const sha = fileData.sha; // нужен для обновления файла
    const contentText = Buffer.from(contentBase64, "base64").toString("utf-8");
    const users = JSON.parse(contentText);

    // 2. Проверяем, есть ли уже такой пользователь
    if (users.find(u => u.mcUser === mcUser)) {
      return new Response(JSON.stringify({ error: "Пользователь уже существует" }), { status: 400 });
    }

    // 3. Добавляем нового пользователя
    users.push({
      mcUser,
      password,
      role: ["Player"],
      verified: "false",
      active: "true",
    });

    // 4. Отправляем обратно на GitHub
    const updatedContent = Buffer.from(JSON.stringify(users, null, 2)).toString("base64");
    const putRes = await fetch(getUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: `Добавлен пользователь ${mcUser}`,
        content: updatedContent,
        sha,
      }),
    });

    if (!putRes.ok) {
      return new Response(JSON.stringify({ error: `Ошибка обновления: ${putRes.status}` }), { status: putRes.status });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
