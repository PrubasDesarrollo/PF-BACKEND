const mongoose = require('mongoose')

const parseId = (id) =>{
    return new mongoose.Types.ObjectId(id)
}

module.exports = parseId;