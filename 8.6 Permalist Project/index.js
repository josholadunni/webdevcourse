import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "hpharrypot",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// let items = [
//   { id: 1, title: "Buy milk" },
//   { id: 2, title: "Finish homework" },
// ];

async function checkItems() {
  try {
    const result = await db.query("SELECT * FROM items");
    return result;
  } catch (err) {
    console.error(err);
  }
}

app.get("/", async (req, res) => {
  const result = await checkItems();
  const pageItems = [];
  result.rows.forEach((item) => {
    pageItems.push(item);
  });
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: pageItems,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items(title) VALUES($1)", [item]);
  res.redirect("/");
});

app.post("/edit", (req, res) => {});

app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
