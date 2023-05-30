const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantsScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    images: {
        type: [String],
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
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
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    created:{
        type: Boolean,
        default: false
    },
    phoneNumber:{
        type: String
    },
    valoraciones:[{
        type: Schema.Types.Mixed,
    }],
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
    }],
    isActive:{
        type: Boolean,
        default: true
    },
    transactions:[{
        type: Schema.Types.Mixed,
    }]
},
{
    versionKey: false,
    timestamps: true,
    // strictPopulate: false
}
);

module.exports = mongoose.model('restaurants', restaurantsScheme);//comentario para que me deje ahcer una nueva pr