const { Router } = require("express");
const express = require("express");
const ducks = require("./read");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // to enable calls from every domain
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  ); // allowed actiosn
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // to deal with chrome sending an extra options request
  }

  next(); // call next middlewer in line
});

app.use("/ducks", ducks);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I am listening at ${port}`);
});
