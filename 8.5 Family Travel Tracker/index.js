import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "hpharrypot",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let currentUserId = 1;

// let users = [
//   { id: 1, name: "Angela", color: "teal" },
//   { id: 2, name: "Jack", color: "powderblue" },
// ];

async function checkVisited(userID) {
  currentUserId = userID;

  const result = await db.query(
    "SELECT u.id, u.name, vc.country_code FROM users u JOIN visited_countries vc ON u.id = vc.user_id WHERE u.id = $1",
    [userID]
  );

  const userQuery = await db.query("SELECT id, name, color FROM users");

  //Countries
  let countries = [];
  // console.log(result.rows);
  // console.log(result.rows[0].country_code);

  for (let i = 0; i < result.rows.length; i++) {
    countries.push(result.rows[i].country_code);
  }

  //Total
  let total = result.rows.length;

  //Users

  const users = userQuery.rows;

  //Color
  const color = [];

  userQuery.rows.forEach((colors) => {
    color.push(colors.color);
  });

  const userData = {
    countries: countries,
    total: total,
    users: users,
    color: color,
  };

  return userData;
}

app.get("/", async (req, res) => {
  const countries = await checkVisited(currentUserId);
  res.render("index.ejs", {
    countries: countries.countries,
    total: countries.total,
    users: countries.users,
    color: countries.color[currentUserId - 1],
  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/user", async (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs", {});
  } else {
    const countries = await checkVisited(Number(req.body.user));

    res.render("index.ejs", {
      countries: countries.countries,
      total: countries.total,
      users: countries.users,
      color: countries.color[currentUserId - 1],
    });
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html

  const input = req.body;

  try {
    const result = await db.query(
      "INSERT INTO users (name, color) VALUES ($1, $2) RETURNING id",
      [input.name, input.color]
    );
    currentUserId = result.id;

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
