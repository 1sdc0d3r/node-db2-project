const express = require("express");
const helmet = require("helmet");
const cars = require("./data/carDealerDbConfig");
require("dotenv").config();

const server = express();
server.use(express.json());
server.use(helmet());

const port = process.env.PORT || 8000;

server.get("/cars", (req, res) => {
  console.log("GET");
  cars
    .find()
    .then(cars => res.status(200).send(cars))
    .catch(err =>
      res.status(500).send({ message: "Unable to retrieve cars", error: err })
    );
});

server.post("/cars", (req, res) => {
  // console.log("POST", req.body);
  cars
    .add(req.body)
    .then(car =>
      res
        .status(201)
        .send({ message: "Car successfully added.", response: car })
    )
    .catch(err =>
      res.status(500).send({ message: "Unable to add car.", error: err })
    );
});

server.put("/cars/:id", (req, res) => {
  const carId = req.params.id;
  const update = req.body;
  // console.log(`PUT at ID:${carId}`, update);
  cars
    .updateCar(carId, update)
    .then(count =>
      res
        .status(200)
        .send({ message: "Successfully updated car", count: count })
    )
    .catch(err =>
      res
        .status(500)
        .send({ message: "Not able to modify car data", error: err })
    );
});

server.delete("/cars/:id", (req, res) => {
  console.log("DELETE");
  cars
    .remove(req.params.id)
    .then(count =>
      res
        .status(200)
        .send({ message: "Successfully deleted car", count: count })
    )
    .catch(err =>
      res
        .status(500)
        .send({ errorMessage: "Not able to remove car.", error: err })
    );
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
