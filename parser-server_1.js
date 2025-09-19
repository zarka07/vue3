const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/parse/:article", async (req, res) => {
  const article = req.params.article.toLowerCase();
  const url = `https://alpha-filter.com/ua/${article}/`;

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Чтобы сайт не подумал, что мы бот
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });

    const result = await page.evaluate(() => {
      const title = document.querySelector("h1")?.innerText.trim() || "";

      const getField = (label) => {
        const item = Array.from(document.querySelectorAll("li"))
          .find(li => li.textContent.includes(label));
        return item ? item.textContent.replace(label, "").trim() : "";
      };

      const dimensions = getField("Розміри, мм:");
      const application = getField("Застосування");
      const oem = getField("Оригінальні номери (OEM)");

      const models = Array.from(document.querySelectorAll(".car-model"))
        .map(div => Array.from(div.querySelectorAll("span"))
          .map(span => span.innerText.trim())
          .join(" "))
        .join(", ");

      return [title, dimensions, application, models, oem].filter(Boolean).join(" ");
    });

    res.json({ result });
  } catch (err) {
    console.error("❌ Parser error:", err);
    res.status(500).json({ error: "Помилка при завантаженні або обробці сторінки." });
  } finally {
    if (browser) await browser.close();
  }
});

app.listen(PORT, () => {
  console.log(`✅ Puppeteer-сервер запущено: http://localhost:${PORT}`);
});
