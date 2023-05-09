const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')


const UsersScheme = new mongoose.Schema(
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
        posts:[{
            type: mongoose.Schema.Types.ObjectId, ref:'Posts', autopopulate: true
        }],
        table:{
            type: mongoose.Schema.Types.ObjectId, ref:'Tables', autopopulate: true
        }
    },
    {
        versionKey: false,
    }
)

CursosScheme.plugin(mongoosePaginate) 
CursosScheme.plugin( require('mongoose-autopopulate') ) 

module.exports = mongoose.model('Users',UsersScheme)