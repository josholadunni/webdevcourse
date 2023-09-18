import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let firstName = null;
let lastName = null;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  firstName = req.body.fName;
  lastName = req.body.lName;

  let data = {
    firstNameLength: firstName.length,
    lastNameLength: lastName.length,
    totalLength: firstName.length + lastName.length,
  };

  res.render("index.ejs", { data: data });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
