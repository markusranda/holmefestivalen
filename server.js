const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get("*.png", (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "build", req.url));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on ${port}/`);
});
