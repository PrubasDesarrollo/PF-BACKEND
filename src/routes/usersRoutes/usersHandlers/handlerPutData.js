const {controllerPutDataPosts, controllerPutDataTable, controllerPutData,controllerPutDataValoraciones, controllerPutTransaction, controllerPutDataImages } = require('../usersControllers/controllerPutData')

const handlerPutData = async(req,res) =>{
    try{
        let { id } = req.params;
        let {_id, isAdmin} = req.user;
        console.log('TOKEN DESGLOSADO'+req.user)
        if(id==_id || isAdmin){
        let data = req.body;
        let firebaseUrls;
        if(req.files){
        firebaseUrls = req.files.map((file) => file.firebaseUrl);
        data.image = "image"
        data.galleta = "galleta"
        console.log(data)}

        let user;

        for(virula in data){
            console.log('entrando a virula')
            if(virula=="posts"){
                let {posts} = req.body;
                user = await controllerPutDataPosts(id,posts);
            }
            if (virula === "image"){
            user = await controllerPutDataImages(id, firebaseUrls)

            }
            if(virula=="table"){
                let{table}= req.body;
                user = await controllerPutDataTable(id, table);
            }
            if(virula=="valoraciones"){
                let {valoraciones} = req.body
                user = await controllerPutDataValoraciones(id,valoraciones); 
            }
            if(virula == "transaction"){
                let{transaction} = req.body;
                user = await controllerPutTransaction(id, transaction);
            }
             user = await controllerPutData(id, data, firebaseUrls)
            
        }
        res.status(200).json(user)
    }else{throw new Error("You can't modify this restaurant")}
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;