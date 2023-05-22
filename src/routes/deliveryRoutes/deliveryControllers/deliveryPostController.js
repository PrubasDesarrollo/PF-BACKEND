const delivery = require("../../../db/models/Delivery");

const deliveryPostController = (data) =>{
    return delivery.create(data);
}

module.exports = deliveryPostController;