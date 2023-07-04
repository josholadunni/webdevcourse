const fs = require("fs");

fs.readFile("message.txt", "utf-8", (err, data) => {
  console.log(data);
  if (err) throw err;
}); 


