const express = require("express");
const app = express();

//When a browser requests the '/' route, run this function using these parameters.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Listen for requests on port 3000.
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
