const mongoose = require('mongoose');

const usersScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        email:{
            type: String
        },
        image:{
            type: Buffer
        },
        type_customer:{
            type: String
        },
        description:{
            type: String
        },
        valoraciones:{
            type: Array
        },
        rating:{
            type: Number
        },
        posts:{
            type:[ mongoose.Schema.Types.ObjectId], ref:'posts'
        },
        table:{
            type: mongoose.Schema.Types.ObjectId, ref:'tables'
        }
    },
    {
        versionKey: false,
    }
)

module.exports = mongoose.model('users',usersScheme)