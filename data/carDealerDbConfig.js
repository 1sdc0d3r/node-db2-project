const knex = require("knex");

const configOptions = require("../knexfile");

const carDealerDb = knex(configOptions.development);

module.exports = { find, add, updateCar, remove };

function find() {
  return carDealerDb("cars");
}

function add(data) {
  return carDealerDb("cars").insert(data);
}

function updateCar(id, changes) {
  return carDealerDb("cars")
    .where({ id: id })
    .update(changes);
}

function remove(id) {
  return carDealerDb("cars")
    .where({ id: id })
    .del();
}
