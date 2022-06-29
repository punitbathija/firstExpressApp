const express = require("express");
const app = express();
const path = require("path");
const applications = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/applcants", (req, res) => {
  res.send("hello from the other side");
});

app.get("/r/:applicants", (req, res) => {
  const { applicants } = req.params;
  const data = applications[applicants];
  res.render("applicants", { ...data });
});
app.listen(3200, () => {
  console.log("Tune In To Port 3200");
});
