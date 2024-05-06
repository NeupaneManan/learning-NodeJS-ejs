const express = require("express");
const { blogs } = require("./model/index.js");
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

app.get("/blogs", async (req, res) => {
  //databse bata data nikalna paro
  const allBlogs = await blogs.findAll();
  // console.log(allBlogs);
  res.render("blogs", { blogsdata: allBlogs });
});

app.get("/create", (req, res) => {
  res.render("createblog");
});

app.post("/create", async (req, res) => {
  // /*First Approach
  const title = req.body.title;
  const subTitle = req.body.subtitle;
  const desc = req.body.description;

  //first approach ra 2nd approach same hoo.

  //2nd Approach
  // const { title, subtitle, description } = req.body; //object laii destructure gareko
  // console.log({ title, subtitle, description });

  // console.log(title, subTitle, desc);

  //req.body vaneko hamro form bata ako data parse garna chainxa.

  //blogs vanne table ma lagera data halne
  await blogs.create({
    title: title, // mathi const title bata ako data
    subTitle: subTitle, // mathi const subTitle bata ako data
    description: desc, // mathi const dec bata ako data
  });
  res.redirect("blogs");
});

//
//port asign gareko kun port ma chalaune define garako
app.listen(port, () => {
  console.log(`I am Running in port ${port}`);
});
