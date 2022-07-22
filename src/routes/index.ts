import type { Express } from "express"
import site from './site'
import apis from './apis'
const routes = (app : Express) =>{
    app.use("/", site)
    app.use("/api", apis)
}

export default routes;