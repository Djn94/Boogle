const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const mongoose = require("mongoose");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const routes = require("./routes/api/index")

app.use(routes);

mongoose.connect(process.env.MONGOD_URI || "mongodb://user:localh0st@ds353007.mlab.com:53007/heroku_c7bk768b")
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
