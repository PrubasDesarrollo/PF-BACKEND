const parseId = require("../../../utils/parseId");
const averageGrades = require('../../../utils/averageGrades');
const restaurants = require('../../../db/models/Restaurants');
const delivery = require("../../../db/models/Delivery")
const users = require("../../../db/models/Users")
const posts = require("../../../db/models/Posts");


const deliverysData = async (id) => {
    const usersData = users.find();
    const restaurantsData = restaurants.find();
    const postData = posts.find();

    return await delivery.find({restaurant:id}).populate('customer').populate('c_order').populate('restaurant').exec();
}


const dashController = async (id) => {
    const idParsed = parseId(id)
    const restaurant = await restaurants.find({_id: idParsed},{
        name:0,
        image:0,
        email:0,
        phone:0,
        type_customer:0,
        description:0,
        tags:0,
        city:0,
        address:0,
        country:0,
        created:0,
        phoneNumber:0,
        rating:0,
        menu:0,
        table:0,
        isActive:0
    });

    let data = restaurant.shift();
    const valoraciones = data.valoraciones;

    const stockPerMonth = [];
    const ratingPerMonth = [];
    const deliverysStock = await deliverysData(idParsed);
    const deliverysPerMonth = [];

    for(let i = 1; i < 13; i++){
        let stock = 0;
        let rating = [];
        let deliverys = 0;
        for(let j = 0; j < valoraciones.length; j++){
            let monthValoration = Number(valoraciones[j].createdAt.split("-")[1])
            if(monthValoration == i){
                stock += 1; 
                rating.push(valoraciones[j].rating);
            }
        }
        for(let x = 0; x < deliverysStock.length; x++){
            const fechaObjeto = new Date(deliverysStock[x].created_at);
            const numeroMes = fechaObjeto.getMonth() + 1;
            if(numeroMes == i){
                deliverys +=1;
            }
        }
        stockPerMonth.push(stock);
        ratingPerMonth.push(averageGrades(rating));
        deliverysPerMonth.push(deliverys)
    }

    data = {
        ratingPerMonth:{
            stockPerMonth,
            ratingPerMonth
        },
        deliverysPerMonth
    }


    return data;
};


module.exports = dashController;