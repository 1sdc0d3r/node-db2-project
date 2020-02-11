const express = require("express");
const db = require("./data/dbConfig");
require("dotenv").config();

const server = express();
server.use(express.json());

const port = process.env.PORT || 8000;

server.get("/", (req, res) => {
  db("carDealer")
    .then(cars => res.status(200).json(cars))
    .catch(err =>
      res.status(500).send({ message: "Unable to retrieve cars", error: err })
    );
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
