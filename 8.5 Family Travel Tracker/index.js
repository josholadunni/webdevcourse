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

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisited();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: "teal",
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
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

async function checkUserVisitedCountries(userID) {
  // console.log("Checking for userID:", userID);
  try {
    const searchUser = await db.query(
      "SELECT id, name FROM users WHERE id = $1",
      [userID]
    );
    // console.log("Rows:", searchUser.rows);
    return searchUser.rows;
    // const userVisitedCountries = await db.query(
    //   "SELECT u.id, u.name, vc.user_id, vc.country_code FROM users u JOIN visited_countries vc ON u.id = vc.user_id"
  } catch (error) {
    console.error("Error querying the database:", error);
    return [];
  }
}

app.post("/user", async (req, res) => {
  //res.render index.ejs
  //countries: joinedquery.countries

  const checkVisited = await checkUserVisitedCountries(Number(req.body.user));

  console.log(checkVisited);

  // res.render("index.ejs", {
  //   countries: checkVisited.countries,
  //   total: countries.length,
  //   users: users,
  //   color: "teal",
  // });

  // console.log(req.body.user);
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
