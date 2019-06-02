const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));
// app.use("/static", express.static(path.join(__dirname + "/views")));
// app.use(express.static("view"));
// app.use("/static", express.static(path.join(__dirname, "views/main")));
app.use(express.static(__dirname + "/views"));
// app.get("/", function(req, res, next) {
//   next();
// });
// app.use("/static", express.static("views/main"));
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// app.get("/", (req, res, next) => res.sendFile("index.html"));
// app.get("/", (req, res) => res.render("main/index"));

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "./views/main")
  });
});

// app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Hello world on port ${port}!`));
