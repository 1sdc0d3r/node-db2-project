exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "vin1",
          make: "Audi",
          model: "A4",
          mileage: 100000,
          transmissionType: "manual",
          titleStatus: "clean"
        },
        {
          vin: "vin2",
          make: "VW",
          model: "GTI",
          mileage: 20000,
          transmissionType: "manual",
          titleStatus: "salvaged"
        },
        {
          vin: "vin3",
          make: "Alfa Romero",
          model: "Stelvio",
          mileage: 13000,
          transmissionType: "automatic",
          titleStatus: "clean"
        },
        {
          vin: "vin4",
          make: "Ford",
          model: "Raptor",
          mileage: 7000,
          transmissionType: "automatic",
          titleStatus: "salvaged"
        }
      ]);
    });
};
