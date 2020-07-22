const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

var db = require("./models");

app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
