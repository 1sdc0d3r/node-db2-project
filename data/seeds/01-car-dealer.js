exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("carDealer")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("carDealer").insert([
        {
          id: 1,
          vin: "vin1",
          make: "Audi",
          model: "A4",
          mileage: 100000,
          transmissionType: "manual",
          titleStatus: "clean"
        },
        {
          id: 2,
          vin: "vin2",
          make: "VW",
          model: "GTI",
          mileage: 20000,
          transmissionType: "manual",
          titleStatus: "salvaged"
        },
        {
          id: 3,
          vin: "vin3",
          make: "Alfa Romero",
          model: "Stelvio",
          mileage: "13000",
          transmissionType: "automatic",
          titleStatus: "clean"
        }
      ]);
    });
};
