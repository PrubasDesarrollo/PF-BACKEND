const {controllerPutDataPosts,controllerPutDataTable,controllerPutData} = require('../usersControllers/controllerPutData')

const handlerPutData = async(req,res) =>{
    try{
        let { id } = req.params;
        let data = req.body;
        let validator;
        for(bandera in data){
            validator = bandera;
        }
        if(validator=="posts"){
            let {posts} = req.body;
            const user = await controllerPutDataPosts(id,posts);
            res.status(200).json(user)
        }
        else if(validator=="table"){
            let {table} = req.body
            const user = await controllerPutDataTable(id,table);
            res.status(200).json(user)
        }   
        else{
            const user = await controllerPutData(id, data);
            res.status(200).json(user)
        }
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;