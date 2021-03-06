exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .text("vin", 128)
      .unique()
      .notNullable();
    tbl.text("make").notNullable();
    tbl.text("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.text("transmissionType");
    tbl.text("titleStatus");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
