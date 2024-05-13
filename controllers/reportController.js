const Form = require("../models/form");

const reportRender = (request,response) =>{
    let sumAll = 0;
    let sumWeek = 0;
    let sumMonth = 0;
    let sumYear = 0;

    let currentDate = new Date();
    let weekAgo = new Date();
    weekAgo.setDate(currentDate.getDate() - 7); 
    let monthAgo = new Date();
    monthAgo.setDate(currentDate.getDate() - 30); 
    let yearAgo = new Date();
    yearAgo.setDate(currentDate.getDate() - 365); 

    let sumFood = 0;
    let sumBills = 0;
    let sumHealth = 0;
    let sumClothes = 0;
    let sumRelaxation = 0;
    let sumOthers = 0;

    Form.fetchAll((forms) => {
        for(let form of forms){
            let sumForm = Number(form.sum);
            sumAll += sumForm;
            let date = new Date(form.date);
            if(date >= weekAgo) sumWeek += sumForm;
            if(date >= monthAgo) sumMonth += sumForm;
            if(date >= yearAgo) sumYear += sumForm;
            if(form.category === "Food") sumFood+= sumForm;
            if(form.category === "Bills") sumBills+= sumForm;
            if(form.category === "Health") sumHealth+= sumForm;
            if(form.category === "Clothes") sumClothes+= sumForm;
            if(form.category === "Relaxation") sumRelaxation+= sumForm;
            if(form.category === "Others") sumOthers+= sumForm;
        }
        response.render("report",  {
            forms : forms,
            PageName: "Expense report",
            sumAll: sumAll,
            sumWeek: sumWeek,
            sumMonth: sumMonth,
            sumYear: sumYear,
            sumFood: sumFood,
            sumBills: sumBills,
            sumHealth: sumHealth,
            sumClothes: sumClothes,
            sumRelaxation: sumRelaxation,
            sumOthers: sumOthers
        } );
    });
}


module.exports = reportRender;