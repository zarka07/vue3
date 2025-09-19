const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/parse/:article", async (req, res) => {
  const article = req.params.article.toLowerCase();
  const url = `https://alpha-filter.com/ua/${article}/`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept-Language": "en-US,en;q=0.9",
      }});
    const $ = cheerio.load(data);
    //fs.writeFileSync("debug.html", data, "utf8");
    //console.log("HTML записан в файл debug.html");
    const title = $("h1").text().trim();
    const dimensions = $("div.elem")
      .find("span:contains('Розміри, мм:')")
      .text()
      .replace("Розміри, мм:", "")
      .trim();
    const usage = $("div.elem")
      .find("span:contains('Застосування')")
      .text()
      .replace("Застосування", "")
      .trim();
    const model = $("div.elem")
      .find("span:contains('Модель')")
      .text()
      .replace("Модель", "")
      .trim();
    const oem = $("div.elem")
      .find("span:contains('Оригінальні номери')")
      .text()
      .replace("Оригінальні номери (OEM)", "")
      .trim();

    const result = [title, dimensions, usage, model, oem].filter(Boolean).join(" ");
    res.json({ result });
  } catch (err) {
    console.error("Помилка при запиті або парсингу:", err);
  res.status(500).json({ error: "Не вдалося отримати дані." });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});