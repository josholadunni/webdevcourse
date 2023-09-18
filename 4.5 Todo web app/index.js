import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/missed", (req, res) => {
  res.render("missed.ejs");
});

app.get("/completed", (req, res) => {
  //Run 'update' function on completed grid
  res.render("completed.ejs");
});

app.post("/addToDo", (req, res) => {
  //Get req.body text content
  //Push to todo array
  //Run function that adds last array item to grid system
});

app.post("addNote", (req, res) => {
  //Push to notes array
});

//Completing tasks

//1. Mark checkbox
//2. Get ID of todo item
//3. Add button press styling
//4. Wait a second
//5. Remove from todo array
//6. Run 'update' function on todo grid
//7. Add ID to completed array

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
