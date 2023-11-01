//read from file
const { log } = require("console");
const fs = require("fs");
// const first = fs.readFileSync("./data/first.txt", "utf-8");
// console.log(first);

// const second = fs.readFileSync("./data/second.txt");
// console.log(second.toString());

// //write to file
// const title = "este es el contenido del archivo";
// fs.writeFileSync("./data/third.txt", title, {
//   flag: "a", //append
// });

//asincrono
fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  console.log(data);

  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) console.log(error);
    console.log(data);
  });
});
