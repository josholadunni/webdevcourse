const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Reading,uk&units=metric&appid=04bd69f713e9ab54bcb708f9134cdc31";

  //Use the https protocol to contact the above url. Log the status code of the response. When data is received as a response, use JSON to parse this data.

  https.get(url, (response) => {
    console.log("Status: " + response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);

      const weatherLocation = weatherData.name;
      const weatherTemp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      console.log(imageURL);

      res.write("<p>The weather is currently " + weatherDescription + "</p>");

      res.write(
        "<h1>The current temperature in " +
          weatherLocation +
          " is " +
          weatherTemp +
          "</h1>"
      );

      res.write("<img src=" + url + ">")

      res.send();
    });
  });

  //
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
