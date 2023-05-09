const restaurants = require("../../db/models/Restaurants");

// * modelo padre restaurants
// * modelo hijo o relacionado es posts
const resturantsConPosts = async () => {
    const union = await restaurants.aggregate(
        [
            {
                $lookup:{
                    from: 'posts', // ? coleccion de la que relacionamos datos
                    localField: 'menu', // ? campo de restaurants que se va a relacionar
                    foreignField: '_id', // ? campo de posts que se guardara en el campo menu de restaurants
                    as: 'restaurantMenu', // ? alias para esta relacion entre restaurants y posts
                    // let: {
                    //     aliasName: "$name" // ? variable que almacena el nombre del restaurante
                    // },
                    // pipeline:[  // ? hacemos operadores logicos que hacen referencia al hijo, en este caso posts
                    //     {
                    //         $match:{
                    //             $expr:{

                    //             }
                    //         }
                    //     }
                    // ]
                }
            }
        ]
    )
    return union;
}

module.exports = resturantsConPosts;