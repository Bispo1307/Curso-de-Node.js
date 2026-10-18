const fs = require("fs");

fs.readFile("arquivo.txt", "utf8", (error, file) => {
  console.log(file);
});
