const delivery = require("../../../db/models/Delivery");

const deliveryPostController = async (data) =>{
    
    const pedido = {
        customer: data.customer,
        c_country: data.country,
        c_city: data.city,
        c_adress: data.adress,
        c_order: data.order,
        to_recieve: data.to_recieve,
        cost: data.cost,
        observations: data.observations,
        status: data.status,
        
    }
    const deli = await delivery.create(pedido);


    return deli;
}

module.exports = deliveryPostController;