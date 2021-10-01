const express = require('express');

const app = express();
var db = require("./database.js")
const port = process.env.PORT || 3000;

app.get(/js|css|img/, (req, res) => {
  res.sendFile(`${__dirname}/${req.path}`);
});

app.get(/\//, (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port);

app.get("/api/users", (req, res, next) => {
  var sql = "select * from user"
  var params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});