const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2')

const postScheme = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    ingredients:{
        type: String
    },
    original:{
        type: Boolean
    },
    cost:{
        type: Number
    },
    rating:{
        type: Number
    },
    authorUser:[{type: mongoose.Schema.Types.ObjectId, ref: 'Users', autopopulate: true}],
    authorRest:[{type: mongoose.Schema.Types.ObjectId, ref: 'Restaurants', autopopulate: true}]
})

postScheme.plugin(mongoosePaginate);
postScheme.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Posts', postScheme);
