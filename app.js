const express = require("express");
const app = express();
const port = 8000; // My port Number
//Settin ejs
app.set("view engine", "ejs");

//form bata data aira xaa parse garr natra handle garr vaneko
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Database Connectivity
require("./model/index.js");

//API haru banako

app.get("/blogs", (req, res) => {
  res.render("blogs");
});

app.get("/create", (req, res) => {
  res.render("createblog");
});

app.get("/admin", (req, res) => {
  res.render("adminpannel");
});

app.get("/add", (req, res) => {
  res.render("addservice");
});

app.get("/unregistered", (req, res) => {
  res.render("unregworkers");
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.render("blogs");
});

//port asign gareko kun port ma chalaune define garako
app.listen(port, () => {
  console.log(`I am Running in port ${port}`);
});
