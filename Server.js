const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

const errorRoute = require("./routes/error");
const formRoute = require("./routes/forms");
const formListRoute = require("./routes/formList");
const formEditRoute = require("./routes/editForm");
const formDeleteRoute = require("./routes/deleteForm");
const raportRoute = require("./routes/report");
const homeRoute = require("./routes/home");


const PORT = 3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use(formRoute);
app.use(formListRoute);
app.use(formEditRoute);
app.use(formDeleteRoute);
app.use(raportRoute);
app.use(homeRoute);


app.use("*",errorRoute);

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost${PORT}`);
})