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
let mallardDuck;
let whiteDuck;
let toyDuck;
let woodDuck;

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

  if (content === "mallardDuck") {
    mallardDuck = content;
  }
  if (content === "whiteDuck") {
    whiteDuck = content;
  }
  if (content === "toyDuck") {
    toyDuck = content;
  }
  if (content === "woodDuck") {
    woodDuck = content;
  }
});
const ducks = {
  noFly: noFly,
  flyWithWings: flyWithWings,
  quack: quack,
  squeak: squeak,
  silent: silent,
  woodDuck: woodDuck,
  mallardDuck: mallardDuck,
  whiteDuck: whiteDuck,
  toyDuck: toyDuck,
};

router.get("/", async (req, res) => {
  return res.send(ducks);
});

module.exports = router;
