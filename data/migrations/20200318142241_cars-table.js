
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        //remember to 'return the call to knex.schema
        //a primary key, named id, type integer, autoincrement
        tbl.increments()
  
        tbl.string('Make', 255).notNullable().unique().index()
        tbl.string('Model', 255).notNullable().unique().index()
        tbl.decimal('Milage', 255).notNullable().index()
        tbl.string('VIN', 255).notNullable().unique().index()
    })
  };
  
  exports.down = function(knex) {
    //remove (drop) the cars table
      return knex.schema.dropTableIfExists('cars')
  };