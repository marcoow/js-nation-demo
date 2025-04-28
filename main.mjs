import express from "express";
import { readFile } from "node:fs/promises";
import { highscore as highscoreRs } from "./index.js";

const app = express();
const PORT = 3000;

app.get("/highscore", async (req, res) => {
  const data = await readFile("data.json", "utf8");
  const entries = JSON.parse(data);

  let maxScore = 0;
  for (const entry of entries) {
    if (entry.score > maxScore) {
      maxScore = entry.score;
    }
  }

  res.status(200).send(maxScore);
});

app.get("/highscore.rs", async (req, res) => {
  const maxScore = highscoreRs();
  res.status(200).send(maxScore);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
