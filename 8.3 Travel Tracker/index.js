import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM public.visited_countries");

    // console.log(result);

    const data = {
      total: result.rows.length,
      countries: result.rows.map((row) => {
        return row.country_code;
      }),
    };

    res.render("index.ejs", data);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occured");
  }
});

app.post("/add", async (req, res) => {
  const countryName = req.body.country;

  const capitalisedCountryName = countryName
    .toLowerCase()
    .replace(/\b(\w)/g, (s) => s.toUpperCase());

  const result = await db.query(
    "SELECT country_code FROM public.countries WHERE country_name = $1",
    [capitalisedCountryName]
  );

  if (result.rows.length !== 0) {
    const countryCode = result.rows[0].country_code;

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
