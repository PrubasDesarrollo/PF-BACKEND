const {getUserController, getUserControllerQuery,getUserByMail} = require('../usersControllers/getUsersControllers');
const modelateData = require('../../../utils/modelateData')

const handlerGetUsers = async(req,res) =>{
    try{
        const {page, order, email} = req.query;
        let users;
        let info;
        if(email){
            let data = await getUserByMail(email)
            res.status(200).json(data)
        }
        else{
        if(!order){
            users = await getUserController();
        }else if(order){
            users = await getUserControllerQuery(order);
        }
        if(!page){
             info = modelateData(1,users)
        }else if(page){
            info = modelateData(page,users)
        }
       
        res.status(200).json(info);}
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

module.exports = handlerGetUsers; 