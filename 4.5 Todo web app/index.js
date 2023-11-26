import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 4000;

const jobArray = [];

const completedArray = [];

app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    currentList: "to-do-btn",
    jobList: jobArray,
    completedList: completedArray,
  });
});

app.get("/missed", (req, res) => {
  res.render("missed.ejs", {
    currentList: req.session.currentList || "missed-btn",
    jobList: jobArray,
  });
});

app.get("/completed", (req, res) => {
  //Run 'update' function on completed grid
  res.render("completed.ejs", {
    currentList: req.session.currentList || "completed-btn",
    jobList: jobArray,
    completedList: completedArray,
  });
});

app.post("/setCurrentList", (req, res) => {
  req.session.currentList = req.body.currentList;
  res.send("Received");
});

app.post("/submit-job", (req, res) => {
  if (jobArray.indexOf(req.body.jobtext) == -1) {
    jobArray.push(req.body.jobtext);
  } else {
    res.redirect("/");
  }

  res.redirect("/");

  //Get req.body text content
  //Push to todo array
  //Run function that adds last array item to grid system
});

app.post("/complete-job", (req, res) => {
  const jobId = req.body.jobId;

  const regex = /(\d+)(?!.*\d)/;
  const match = jobId.match(regex);

  if (match) {
    const jobIndex = parseInt(match[0], 10);

    if (jobIndex >= 0) {
      const completedJob = jobArray.splice(jobIndex, 1);
      completedArray.push(completedJob);
      console.log("Redirecting");
      res.status(200).send("Job completed");
    } else {
      console.log(`Job ID out of bounds`);
      res.status(400).send("Job ID out of bounds");
    }
    // console.log(jobIndex);
  } else {
    console.log("No matchng number found in jobId");
    res.status(400).send("Invalid job ID");
  }
});

app.delete("/delete-job/:jobId", (req, res) => {
  const jobId = req.params.jobId;

  console.log(jobId);

  const regex = /(\d+)(?!.*\d)/;
  const match = jobId.match(regex);

  if (match) {
    const jobIndex = parseInt(match[0], 10);

    if (jobIndex >= 0) {
      const deleteJob = () => { jobArray.splice(jobIndex, 1); }

      deleteJob();
    
      res.status(200).send("Job deleted");
    } else {
      console.log(`Job ID out of bounds`);
      res.status(400).send("Job ID out of bounds - not deleted");
    }
    // console.log(jobIndex);
  } else {
    console.log("No matchng number found in jobId");
    res.status(400).send("Invalid job ID");
  }
  
});

app.post("/addNote", (req, res) => {
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
