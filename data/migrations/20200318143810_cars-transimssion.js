
exports.up = function(knex) {
  return knex.schema.alterTable('cars', (tbl) =>{
      tbl.text('transmission')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('cars', (tbl) =>{
      table.dropColumn('transmission')
  })
};
