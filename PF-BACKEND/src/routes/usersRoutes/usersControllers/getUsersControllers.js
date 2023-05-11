const users = require('../../../db/models/Users');
const posts = require('../../../db/models/Posts');
const tables = require('../../../db/models/Tables');
const modelateData = require('../../../utils/modelateData')

const getUserController = async(params) =>{

    let infoSend
    const tablesData = tables.find();
    const postsData = posts.find();
    infoSend = await users.find().sort({rating: -1}).populate('posts').populate('table').exec()

    for(let prop in params){
        if (prop == "order"){
            if(params[prop]=="alphaasc"){
                infoSend = await users.find().sort({name: 1, rating: -1}).populate('posts').populate('table').exec()
            }
            if(params[prop]=="alphadesc"){
                infoSend = await users.find().sort({name: -1, rating: -1}).populate('posts').populate('table').exec();
            }}
        if (prop =="page"){
            return modelateData(params[prop],infoSend)
        }
    }
    // return infoSend
}


module.exports = getUserController; 