const users = require('../db/models/Users');
const restaurants = require('../db/models/Restaurants')

const calculateCapacity = async(totalQuantity, arr, obj, idRestaurant) => {
  const idUser = obj.nombre
  const user = await users.findById(obj.nombre,'name phone email _id').exec() 
  const restaurant = await restaurants.findById(idRestaurant,'name phone email address _id').exec() 
  let totalPeople = 0;
  arr.forEach((reserv) => {
    if(obj.dia == reserv.dia && obj.hora == reserv.hora){
    totalPeople += reserv.people;}
  });
  let compared = totalPeople + obj.people;

  if (compared > totalQuantity) {
    let remainingCapacity = totalQuantity - totalPeople;
    throw new Error(
      `Exceeds the total capacity of the restaurant, space available: ${remainingCapacity} people`
    );
  } else {
    let objUserReserved = {
      ...obj,
      nombre: restaurant
    }

    await users.findOneAndUpdate({_id: idUser}, {reservation:objUserReserved})

    let newObj = {
      ...obj,
      nombre: user
    }
    return newObj;
  }
};

module.exports = calculateCapacity;
