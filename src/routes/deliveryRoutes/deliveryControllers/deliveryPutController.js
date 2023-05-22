const delivery = require("../../../db/models/Delivery");
const parseId = require("../../../utils/parseId");

const deliveryPutController = (id, data) =>{
    const idParsed = parseId(id);
    return delivery.findByIdAndUpdate(idParsed, data);
}

const deliveryPutOrder = (id, orderData) =>{
    const orderId = parseId(id);
    return delivery.findByIdAndUpdate(orderId, {$push: {c_order: orderData}})
}

const deliveryRemoveOrder = (id, orderData) =>{
    const orderId = parseId(id);
    return delivery.findByIdAndUpdate(orderId, {$pull: {c_order: orderData}})
}

module.exports = {
    deliveryPutController,
    deliveryPutOrder,
    deliveryRemoveOrder
};
