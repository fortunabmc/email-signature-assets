// @ts-check
import "dotenv/config";
import express from "express";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const PORT = process.env.PORT || 4444;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, "src/index.html");

function populateTemplate(mappings) {
  const htmlContent = readFileSync(filePath, "utf8");
  return htmlContent.replace(/%%(\w+)%%/g, (match, p1) => mappings[p1] || "");
}

const app = express();

app.get("/", async (req, res) => {
  console.log(req.query);
  const html = populateTemplate(req.query);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
