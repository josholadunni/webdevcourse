// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3002;
const API_URL = "https://secrets-api.appbrewery.com";

const yourBearerToken = "9acecc7d-d228-49fe-81d6-66b8591ac8cc";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random", config);
    res.render("index.ejs", { content: result.data });
    console.log(result.data);
  } catch (error) {
    res.render("index.ejs", { content: error.response.data });
  }
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
