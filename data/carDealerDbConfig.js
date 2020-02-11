const knex = require("knex");

const configOptions = require("./knexfile");

const carDealerDb = knex(configOptions.development);

module.exports = {find};

function find(){
return carDealerDb("cars")
}

