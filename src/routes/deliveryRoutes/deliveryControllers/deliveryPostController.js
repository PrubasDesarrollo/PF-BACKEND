const delivery = require("../../../db/models/Delivery");

const deliveryPostController = async (data) =>{
    const deli = await delivery.create(data);


    return deli;
}

module.exports = deliveryPostController;