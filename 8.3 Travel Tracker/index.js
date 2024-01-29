import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "hpharrypot",
  port: 5432,
});

db.connect();

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM public.visited_countries");

    console.log(result);

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

app.listen(port, () => {
  console.log(`Server running on htxtp://localhost:${port}`);
});
