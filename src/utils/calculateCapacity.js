const calculateCapacity = (totalQuantity, arr, obj) => {
  let totalPeople = 0;
  arr.forEach((reserv) => {
    totalPeople += reserv.people;
  });
  let compared = totalPeople + obj.people;

  if (compared > totalQuantity) {
    let remainingCapacity = totalQuantity - totalPeople;
    throw new Error(
      `Exceeds the total capacity of the restaurant, space available: ${remainingCapacity} people`
    );
  } else {
    return obj;
  }
};

module.exports = calculateCapacity;
