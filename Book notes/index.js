import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book-notes",
  password: "hpharrypot",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(async (req, res, next) => {
  req.user = await db.query("SELECT * FROM users WHERE user_id = 1");
  req.user = req.user.rows[0];
  next();
});

let getBooks = async () => {
  const result = await db.query("SELECT * FROM books");
  return result.rows;
};

// let bookCover = () => {
//   return;
// };r

app.get("/", async (req, res) => {
  try {
    let result = await getBooks();
    res.render("index.ejs", {
      books: await getBooks(),
      user: req.user,
    });
  } catch (error) {
    console.error(error);
  }
});

app.post("/add-book", (req, res) => {
  try {
    let { bookTitle, bookRating, bookDate, bookDesc, bookISBN } = req.body;
    const [day, month, year] = bookDate.split("/");
    const date = new Date(`${year}-${month}-${day}`);
    db.query(
      "INSERT INTO books(user_id, title, rating, description, date_read, isbn) VALUES ($1, $2, $3, $4, $5, $6)",
      [req.user.user_id, bookTitle, bookRating, bookDesc, date, bookISBN]
    );
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});

try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
} catch (error) {
  console.error(error);
}
