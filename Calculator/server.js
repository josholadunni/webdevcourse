const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//When a request from a browser is received requesting the home route '/', send this response.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

//Listen at port 3000 for requests.
app.listen(3000, () => {
  console.log("Server started on port 3 000");
});
