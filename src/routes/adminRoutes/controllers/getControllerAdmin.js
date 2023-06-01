const users = require('../../../db/models/Users');
const restaurants = require('../../../db/models/Restaurants');
const banned = require('../../../db/models/Banned');
const averageGrades = require('../../../utils/averageGrades')

const getControllerAdmin = async() =>{
    let infoUsers = await users.find();
    let infoRestaurants = await restaurants.find();

    let modelateInfoUsers = infoUsers.map(async(user)=>{
        let bandera =user.email ? await banned.find({'user_banned.email': user.email}) : []
        return { 
            id: user._id,
            name: user.name,
            image: user.images.length>0 ? user.images[0] :"",
            email: user.email,
            rol: (user.isAdmin==true)?"Admin":user.type_customer,
            status: (bandera.length>0) ? "banned" : (user.isActive ? "active" : "innactive"),
            // banned:(bandera.length>0) ? true : false,
            rating: 0,
            country: user.country,
        }
    })


    let modelateInfoRestaurants = infoRestaurants.map(async(restaurant)=>{
        let bandera =restaurant.email ? await banned.find({'user_banned.email': restaurant.email}) : []
        return { 
            id: restaurant._id,
            name: restaurant.name,
            images: restaurant.images.length ? restaurant.images[0] : "",
            email: restaurant.email,
            rol: restaurant.type_customer,
            status: (bandera.length>0) ? "banned" : (restaurant.isActive ? "active" : "innactive"),
            // banned:(bandera.length>0) ? true : false,
            rating: averageGrades(restaurant.valoraciones || []),
            country: restaurant.country,
        }
    })

    let usersResults = await Promise.all(modelateInfoUsers);
    let restaurantsResults = await Promise.all(modelateInfoRestaurants);
 
    let info = [...usersResults, ...restaurantsResults];
    
    return info
}

module.exports = getControllerAdmin;