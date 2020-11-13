const express = require("express");
const router = express.Router();
const fs = require("fs");

let contents = fs.readFileSync("ducks.txt", "utf8").split("\r\n");
console.log(contents);

let noFly;
let flyWithWings;
let quack;
let squeak;
let silent;
contents.forEach((content) => {
  if (content === "noFly") {
    noFly = content;
  }
  if (content === "flyWithWings") {
    flyWithWings = content;
  }
  if (content === "quack") {
    quack = content;
  }
  if (content === "squeak") {
    squeak = content;
  }
  if (content === "silent") {
    silent = content;
  }
});
const ducks = {
  noFly: noFly,
  flyWithWings: flyWithWings,
  quack: quack,
  squeak: squeak,
  silent: silent,
};

router.get("/", async (req, res) => {
  return res.send(ducks);
});

module.exports = router;
