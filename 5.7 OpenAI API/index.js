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

const modelList = await axios.get(API_URL + "/models", config);

app.get("/", async (req, res) => {
  try {
    res.render("index.ejs", {
      chatMessages: "Waiting for input",
      models: modelList.data,
      selectedModel: undefined,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/chat-request", async (req, res) => {
  const messageData = {
    model: req.body.model,
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: req.body.message },
    ],
  };

  try {
    const completionResult = await axios.post(
      API_URL + "/chat/completions",
      messageData,
      config
    );
    res.render("index.ejs", {
      chatMessages: completionResult.data.choices,
      models: modelList.data,
      selectedModel: req.body.model,
    });
  } catch (error) {
    res.render("index.ejs", {
      chatMessages: error.response.data.error.message,
      models: modelList.data,
      selectedModel: req.body.model,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
