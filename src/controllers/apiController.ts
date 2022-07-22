import { Request, Response, NextFunction } from 'express';
import logEvents from '../helpers/logEvents';
import axios from 'axios';
class apiController{
    static async getCourses(req : Request, res : Response, next : NextFunction){
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
            return res.status(200).json({data: response.data});
        } catch (error : any) {
            await logEvents(error.message, module.filename);
            return res.status(500).json(error.message);
        }
    }
}
export default apiController;