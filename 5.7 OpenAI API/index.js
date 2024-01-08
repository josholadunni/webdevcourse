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

const API_URL = "https://api.openai.com/v1";

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const completionResult = await axios.post(
      API_URL + "/chat/completions",
      data,
      config
    );
    const modelList = await axios.get(API_URL + "/models", config);
    res.render("index.ejs", {
      chatMessages: completionResult.data,
      models: modelList.data,
    });
  } catch (error) {
    res.render("index.ejs", {
      chatMessages: error.response.data,
      models: error.response.data,
    });
  }
});

app.post("/chat-request", async (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
