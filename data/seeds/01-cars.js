
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').turncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, Make: 'KAWASAKI', Model: 'ER-6N', Milage: 15824.3, VIN: '7J3ZZ56T7834500003' },
        { id: 2, Make: 'LAND ROVER', Model: 'FREELANDER', Milage: 23824.8, VIN: '5B3YZ54T7834500006' },
        { id: 3, Make: 'PONTIAC', Model: 'G8', Milage: 824.1, VIN: '2D7ZY73S7884500012' }
      ]);
    });
};
