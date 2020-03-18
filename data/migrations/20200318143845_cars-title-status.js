
exports.up = function(knex) {
  return knex.schema.alterTable('cars', (tbl) =>{
      tbl.text('titleStatus')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('cars', (tbl) =>{
      tbl.dropColumn('titleStatus')
  })
};
