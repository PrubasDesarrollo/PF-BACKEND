const mongoose = require("mongoose");

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
    menu: {
        type: Array,
        default: []
    },

    tables: [{
        type: mongoose.Types.ObjectId,
        ref: 'tables'
    }]
    // menu:[{type: mongoose.Schema.Types.ObjectId, ref:'Posts', autopopulate: true}],

    // tables:[{type: mongoose.Schema.Types.ObjectId, ref:'Tables', autopopulate: true}]
},
{
    versionKey: false,
    timestamps: true,
    // strictPopulate: false
}
);

module.exports = mongoose.model('restaurants', restaurantsScheme);//comentario para que me deje ahcer una nueva pr