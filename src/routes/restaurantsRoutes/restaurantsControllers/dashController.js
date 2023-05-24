const parseId = require("../../../utils/parseId");
const restaurants = require('../../../db/models/Restaurants');
const averageGrades = require('../../../utils/averageGrades');

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
    const votesPerMonth = [];

    for(let i = 1; i < 12; i++){
        let stock = 0;
        let rating = [];
        for(let j = 0; j < valoraciones.length; j++){
            let monthValoration = Number(valoraciones[j].createdAt.split("-")[1])
            if(monthValoration == i){
                stock += 1; 
                rating.push(valoraciones[j].rating);
            }
        }
        stockPerMonth.push(stock);
        ratingPerMonth.push(averageGrades(rating));
    }
    data = {
        ratingPerMonth:{
            stockPerMonth,
            ratingPerMonth
        }
    }


    return data;
};

module.exports = dashController;