// STRETCH
const cars = [
    {
      vin: '5GAEV23718J129013',
      make: 'toyota',
      model: 'prius',
      mileage: 215000,
      title: 'clean',
      transmission: 'manual',
    },
    {
      vin: '4UZAAZAL53CL74424',
      make: 'toyota',
      model: 'corolla',
      mileage: 15000,
      title: 'salvage',
    },
    {
      vin: 'JH4DB1561NS000565',
      make: 'ford',
      model: 'focus',
      mileage: 15000,
    },
  ]
  
   exports.seed = function (knex) {
      return knex('cars')
        .truncate().then(() => {
          return knex('cars') .insert(cars)
    })
   }
  
   // exports.seed = async function (knex) {
  //  await knex('cars').truncate()
  //  await knex('cars').insert(cars)
  // }
  
  