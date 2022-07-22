import type { Express } from "express";
import express from "express";
import { engine } from "express-handlebars";
const viewEngine = (app : Express) =>{
    app.use(express.static("./src/public"))
    app.engine('.hbs', engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    app.set('views', "./src/views")
}

export default viewEngine;