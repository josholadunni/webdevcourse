const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//Get the home route '/' and run this function using these parameters.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//When a post request is sent to the home route '/', do this.
app.post("/", (req, res) => {
  //Assigns the relevant data from the body of the request to each variable.
  let num1 = Number(req.body.firstNumber);
  let num2 = Number(req.body.secondNumber);

  let result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

//When this page is requested, respond with this html file.
app.get("/bmiCalculator.html", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);

  let bmiResult = weight / (height * height);

  res.send("Your BMI is " + bmiResult);
});

//Listen for requests on port 4000.
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
 