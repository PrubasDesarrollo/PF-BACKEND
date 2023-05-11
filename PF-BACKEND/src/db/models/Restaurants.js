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
    valoraciones:{
        type: Array,
    },
    rating:{
        type: Number,
        default: 0
    },
    menu: {
        type: Array,
    },

    table: [{
        type: mongoose.Types.ObjectId,
        ref: 'tables',
    }]
},
{
    versionKey: false,
    timestamps: true,
    // strictPopulate: false
}
);

module.exports = mongoose.model('restaurants', restaurantsScheme);//comentario para que me deje ahcer una nueva pr