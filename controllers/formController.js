const Form = require("../models/form");


const newFormRender = (request,response) =>{
    response.render("newForm",{PageName: "New Form"});
}
const formListRender = (request,response) =>{ 
    Form.fetchAll((forms) => {
        response.render("formList",  {
            forms : forms,
            PageName: "Form List"
        } );
    });
}

const addNewForm = (request,response) =>{
    const {expenseName, category , sum, date} = request.body;
    const form = new Form(expenseName, category , sum, date);
    form.save();
    response.redirect("/forms");
}

const formEditRender = (request,response) =>{
    console.log("działam render");
    const id = Number(request.params.id);
    Form.getForm((form)=>{
        response.render("editForm",{
                    form : form,
                    PageName : "Edit Form",
                    id: id
                })
    },id)
}

const editForm = (request,response) =>{
    console.log("działam")
    const id = request.params.id;
    const parsedId = parseInt(id);
    console.log(parsedId);
    const { expenseName, category, sum, date } = request.body;
     
    Form.getFormAndSave(parsedId,expenseName,category,sum,date,(err,success)=>{
        if(err) return response.sendStatus(404);

        if(!success) return response.sendStatus(500);

        response.redirect("/forms");
    })
}

const deleteFrom = (request,response) =>{
    console.log("dziala usun");
    const id = request.params.id;
    const parsedId = parseInt(id);
    console.log(parsedId);

    Form.deleteFrom(parsedId,(err,success)=>{
        if(err) return response.status(500);
        
        if(!success) return response.sendStatus(400);
        
        response.redirect("/forms");
    });
    
}

module.exports = {
    newFormRender,
    formListRender,
    addNewForm,
    formEditRender,
    editForm,
    deleteFrom
}
