const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2')

const restaurantsScheme = new mongoose.Schema({
    name:{
        type: String
    },
    type_customer:{
        type: String
    },
    description:{
        type: String
    },
    addres:{
        type: String
    },
    rating:{
        type: Number
    },
    menu:[{type: mongoose.Schema.Types.ObjectId, ref:'Posts', autopopulate: true}],

    tables:[{type: mongoose.Schema.Types.ObjectId, ref:'Tables', autopopulate: true}]
});

restaurantsScheme.plugin(mongoosePaginate) 
restaurantsScheme.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Restaurants', restaurantsScheme);//comentario para que me deje ahcer una nueva pr