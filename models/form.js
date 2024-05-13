const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

const formPath = path.join(rootDir, "data", "forms.json");

const getFormsFromFile = (callback) =>{
    fs.readFile(formPath, (err,data) =>{
        if(err) 
        {
            return callback([]);
        }
            const forms = JSON.parse(data);
            callback(forms);
    });
}

module.exports = class Form {
    constructor(expenseName,category,sum,date){
        Form.fetchAll((forms)=>{
            let id = 0;
            if (forms.length > 0) {
                id = forms[forms.length - 1].id + 1;
            } else {
                id = 1;
            }
            this.id = id;
            this.expenseName = expenseName;
            this.category = category;
            this.sum = sum;
            this.date = date;
            
        });
    }
    
    save(){
        getFormsFromFile((forms) => {
            forms.push(this);
            fs.writeFile(formPath, JSON.stringify(forms), (err)=>{
                console.log(err);
            });
        }) 
    };

    static fetchAll(callback){
        getFormsFromFile(callback);   
     }
     
     static getForm(callback,id){
        getFormsFromFile((forms) => {
            for (let form of forms) {
                if (form.id === id) {
                    callback(form);
                    return;
                }
            }
            callback(null); 
        });
    }

    static getFormAndSave(id,expenseName,category,sum,date,callback){
        getFormsFromFile((forms) => {
            let edited = false;
                for (let form of forms) {
                    if (form.id === id) {
                        form.expenseName = expenseName;
                        form.category = category;
                        form.sum = sum;
                        form.date = date;
                        edited = true;
                        break;
                    }
                }
                if (edited) {
                    fs.writeFile(formPath, JSON.stringify(forms), (err)=>{
                        console.log(err);
                    });
                    callback(null,true);
                } else {
                    callback(null, false);
                }
            
        });
    }

    static deleteFrom(id,callback){
        getFormsFromFile((forms) => {
            let deleted = false;
            for (let i = 0; i < forms.length; i++) {
                if (forms[i].id === id) {
                    forms.splice(i, 1);
                    deleted = true;
                    break;
                }
            }
            if (deleted) {
                fs.writeFile(formPath, JSON.stringify(forms), (err)=>{
                    console.log(err);
                });
                callback(null,true);
            } else {
                callback(null, false);
            }
        });
    }
}
