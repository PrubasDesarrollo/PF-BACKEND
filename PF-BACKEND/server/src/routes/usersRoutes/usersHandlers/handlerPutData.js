const {controllerPutDataPosts,controllerPutDataTable} = require('../usersControllers/controllerPutData')

const handlerPutData = async(req,res) =>{
    try{
        let {info} = req.params;
        if(info=="post"){
            let {idUser,posts} = req.body;
            const user = await controllerPutDataPosts(idUser,posts);
            res.status(200).json(user)
        }
        if(info=="table"){
            let {idUser,table} = req.body
            const user = await controllerPutDataTable(idUser,table);
            res.status(200).json(user)
        }   
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;