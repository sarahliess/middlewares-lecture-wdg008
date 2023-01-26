require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const postsRoutes = require("./routes/posts");

//inbuilt middleware
//parst Daten aus req.body (kommend aus HTML Formularen)
app.use(express.urlencoded({ extended: true }));

//inbuilt middleware
//parst JSON Daten aus req.body (kommend aus NICHT-HTML Formularen)
app.use(express.json());

//3rd party middleware
//erlaubt Zugriff unabhängig vom Client
app.use(cors());

//inbuilt middleware
app.use("/", postsRoutes);

app.get("/", (req, res) => {
  res.send(`<h1>Middleware Lecture</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
