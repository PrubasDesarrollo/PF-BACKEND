const mongoose = require("mongoose");

const restaurantsScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    type_customer:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    tags:{
        type: Array
    },
    city:{
        type: String
    },
    address:{
        type: String
    },
    country:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String
    },
    valoraciones:{
        type: Array,
    },
    rating:{
        type: Number,
        default: 0
    },
    menu: [{
        type: mongoose.Types.ObjectId,
        ref: 'posts',
    }],
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