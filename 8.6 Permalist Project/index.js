import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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

async function updateItem(id, title) {
  try {
    await db.query("UPDATE items SET title = $2 WHERE id = $1", [id, title]);
  } catch (err) {
    console.error(err);
  }
}

async function deleteItem(id) {
  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
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

app.post("/edit", (req, res) => {
  updateItem(req.body.updatedItemId, req.body.updatedItemTitle);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  deleteItem(req.body.deleteItemId);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
