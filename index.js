const express = require("express");
const bodyParser = require("body-parser");
// const data = require("./data");
const comments = require("./routes/comments");
const contacts = require("./routes/contacts");
const products = require("./routes/products");
const vehicles = require("./routes/vehicles");

const app = express();

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());

app.use(comments);
app.use(contacts);
app.use(products);
app.use(vehicles);

//get all data
app.get("/", (req, res) => {
  res.send("Hello Express app");
});
