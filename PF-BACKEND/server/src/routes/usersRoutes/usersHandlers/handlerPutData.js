const {controllerPutDataPosts,controllerPutDataTable,controllerPutData} = require('../usersControllers/controllerPutData')

const handlerPutData = async(req,res) =>{
    try{
        let {info} = req.params;
        if(info=="post"){
            let {_id,posts} = req.body;
            const user = await controllerPutDataPosts(_id,posts);
            res.status(200).json(user)
        }
        else if(info=="table"){
            let {_id,table} = req.body
            const user = await controllerPutDataTable(_id,table);
            res.status(200).json(user)
        }   
        else{
            let data = req.body;
            const user = await controllerPutData(data);
            res.status(200).json(user)
        }
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;