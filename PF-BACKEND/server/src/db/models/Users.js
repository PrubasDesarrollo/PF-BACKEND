const mongoose = require('mongoose');

const usersScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        type_customer:{
            type: String
        },
        description:{
            type: String
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