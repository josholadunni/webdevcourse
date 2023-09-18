import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const d = new Date();
let currentDay = d.getDay();
let weekdayOrEnd = "";
let adv = "";

currentDay === 0 || currentDay === 6
  ? ((weekdayOrEnd = "the weekend"), (adv = "chill"))
  : ((weekdayOrEnd = "a weekday"), (adv = "work hard play hard"));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {
    day: weekdayOrEnd,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
