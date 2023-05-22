const delivery = require("../../../db/models/Delivery");
const parseId = require("../../../utils/parseId");


const deliveryDeleteController = (id) =>{
    const idBorrar = parseId(id);
    return delivery.deleteOne({_id: idBorrar})
}


module.exports = deliveryDeleteController;