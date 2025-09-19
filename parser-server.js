const express = require("express");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/parse/:article", async (req, res) => {
  const article = req.params.article.toLowerCase();
  const url = `https://alpha-filter.com/ua/${article}/`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept-Language': 'uk-UA,uk;q=0.9',
      },
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    // 1. Артикул
    //const partCode = $('div.as-h1.word-break').text().trim();

    // 2. Тип фильтра (второй span внутри .elem → .data-lines)
    const type = $('div.data-lines div.elem span').eq(1).text().toLowerCase().trim();

    // 3. Розміри → ищем строку и вытаскиваем только цифры
    const rawSize = $("div.elem span:contains('Розміри, мм:')")
  .next()
  .text()
  .trim(); // e.g. "L: 209 / L1: 184 / H: 42"

const sizeParts = rawSize.match(/L:\s*(\d+)\s*\/\s*L1:\s*(\d+)\s*\/\s*H:\s*(\d+)/);

let dimensions = "";

if (sizeParts) {
  dimensions = `${sizeParts[1]}x${sizeParts[2]}x${sizeParts[3]}`;
}

    // 4. Модели → парсим каждый блок table-box
    const models = [];

    $("div.table-box").each((_, box) => {
      const modelName = $(box).find(".model-name").first().text().trim();
      const firstCell = $(box).find(".side .cell").first().text().trim();

      if (modelName && firstCell) {
        models.push(`${modelName} ${firstCell}`);
      }
    });

    const modelString = models.join(", ");

    // 🧾 Финальная строка
    const resultParts = [
      type,
      dimensions,
      modelString
    ].filter(Boolean);

    const result = "Фільтр "+resultParts.join(" ");

    res.json({ result });
  } catch (err) {
    console.error("Помилка парсингу:", err.message);
    res.status(500).json({ error: "Помилка при отриманні даних" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
