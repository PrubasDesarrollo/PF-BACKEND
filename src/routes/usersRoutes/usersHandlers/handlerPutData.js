const {controllerPutDataPosts,controllerPutDataTable,controllerPutData,controllerPutDataValoraciones, controllerPutDataTransaction} = require('../usersControllers/controllerPutData')

const handlerPutData = async(req,res) =>{
    try{
        let { id } = req.params;
        let {_id, isAdmin} = req.user;
        console.log('TOKEN DESGLOSADO '+req.user)
        if(id==_id || isAdmin){
        let data = req.body;
        let {firebaseUrl} = req.file ? req.file : "";
        
        let user;
        for(virula in data){
            if(virula=="posts"){
                let {posts} = req.body;
                user = await controllerPutDataPosts(id,posts);
            }
            else if(virula=="table"){
                let {table} = req.body
                user = await controllerPutDataTable(id,table);
            }  
            else if(virula=="valoraciones"){
                let {valoraciones} = req.body
                user = await controllerPutDataValoraciones(id,valoraciones); 
            }
            else if(virula == "transaction"){
                let {transaction} = req.body;
                user = await controllerPutDataTransaction(id, transaction);
            }
            else{
                user = await controllerPutData(id, data, firebaseUrl);
            }
        }
        res.status(200).json(user)
    }else{throw new Error("You can't modify this restaurant")}
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;