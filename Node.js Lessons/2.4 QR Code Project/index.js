/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

let question = {
  type: "input",
  name: "url",
  message: "Enter URL",
};

let input = inquirer
  .prompt([question])
  .then((answers) => {
    let qr_png = qr.image(answers.url, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr.png"));
    fs.writeFile("url.txt", answers.url, (err) => {
      if (err) throw err;
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
