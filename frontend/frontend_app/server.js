require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.use("*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || PORT, (req, res) =>
  console.log(`Server is listening on port ${process.env.PORT || PORT}!`)
);