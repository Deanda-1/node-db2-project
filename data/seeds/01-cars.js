// STRETCH
const cars = [
  {
    vin: 'JH4NA1150RT000268',
  make: 'toyota',
  model: 'prius',
  mileage: 215000,
  title: 'clean',
  transmission: 'manual',
  },

  {
    vin: '2HNYD18661H524556',
    make: 'toyota',
    model: 'corolla',
    mileage: 115000,
    title: 'salvage',
  },

  {
    vin: 'JH4KA7530MC011312',
    make: 'ford',
    model: 'focus',
    mileage: 15000,
  },
]

// exports.seed = function(knex) {
//  return knex('cars')
//    .truncate().then(() => {
//      return knex('cars'.insert(cars))
//    })
//}
  
exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}
  
  