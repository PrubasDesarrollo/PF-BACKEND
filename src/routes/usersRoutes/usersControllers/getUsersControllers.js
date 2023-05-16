const users = require('../../../db/models/Users');
const posts = require('../../../db/models/Posts');
const tables = require('../../../db/models/Tables');
const averageGrades = require('../../../utils/averageGrades')

const getUserController = async() =>{
    const tablesData = tables.find();
    const postsData = posts.find();
    const data = await users.find().sort({rating: -1}).populate('posts').populate('table').exec()

    const usersRatings = await mapDataRating(data);

    return usersRatings.sort((a, b) => b.rating - a.rating)
}

const getUserControllerQuery= async(order) =>{
    
    const tablesData = await tables.find();
    const postsData = await posts.find();
    const data = await users.find().sort({name:-1}).populate('posts').populate('table').exec();
    const usersRating = await mapDataRating(data);
    if(order == "alphaasc"){
        return usersRating.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if(nameA > nameB){
                return 1;
            }
            if(nameA < nameB){
                return -1
            }
            return 0
        })
    }
    if(order == "alphadesc"){
        return usersRating.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if(nameA > nameB){
                return -1;
            }
            if(nameA < nameB){
                return 1
            }
            return 0
        })
    }
    if(order == "ratingasc"){
        return usersRating.sort((a, b) => b.rating - a.rating)
    }
    if(order == "ratingdesc"){
        return usersRating.sort((a, b) => a.rating - b.rating)
    }
}

const mapDataRating = async (data) => {
    const mapData = data.map((user) => {
        return{
            id:user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            type_customer: user.type_customer,
            description: user.description,
            valoraciones: user.valoraciones ? user.valoraciones : [0],
            rating: averageGrades(user.valoraciones),
            posts: user.menu,
            table: user.table,
        }
    });
    return mapData;

}



module.exports = {
    getUserController,
    getUserControllerQuery
} 