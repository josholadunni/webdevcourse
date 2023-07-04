const express = require("express");
const app = express();

//When a request from a browser is received requesting the home route '/', send this response.
app.get("/", (req, res) => {
  res.send("<h1>Hello world! </h1>");
});

//When a request is received for '/contact', send this reponse.
app.get("/contact", (req, res) => {
  res.send("Contact me at josholadunni@gmail.com");
});

//About page
app.get("/about", (req, res) => {
  res.send(
    "<h1>About</h1> <br> <p>Hi! I'm Josh - a full stack dev with a background in digital design for marketing.</p>"
  );
});

//Listen at port 3000 for requests.
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
