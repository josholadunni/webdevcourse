import OpenAI from "openai";
import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const bearerKey = "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";

const config = {
  headers: { Authorization: `Bearer ${bearerKey}` },
};

const data = {
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: "This is a test" }],
  temperature: 0.7,
};

const API_URL = "https://api.openai.com/v1/chat/completions";

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.post(API_URL, data, config);
    res.render("index.ejs", { content: result.data });
  } catch (error) {
    res.render("index.ejs", { content: error.response.data });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
