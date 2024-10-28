// @ts-check
import "dotenv/config";
import express from "express";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const PORT = process.env.PORT || 4444;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, "index.html");
const htmlContent = await readFile(filePath, "utf8");

function populateTemplate(mappings) {
    return htmlContent.replace(
        /%%(\w+)%%/g,
        (match, p1) => mappings[p1] || match
    );
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
