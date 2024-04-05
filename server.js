const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.status(200).send("<h1>Главная страница</h1>");
});
app.listen(process.env.SERVER_PORT);
