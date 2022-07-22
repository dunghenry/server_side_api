import { Request } from 'express';
import appRoot from 'app-root-path';
import multer from 'multer';
import path from 'path';
type ICallbackFile = (error: Error | null, filename: string) => void;
type ICallbackDestination = (error: Error | null, destination: string) => void;
const storage = multer.diskStorage({
    destination: (req : Request, file : Express.Multer.File, cb: ICallbackDestination) =>{
        cb(null, appRoot + "/src/public/images/");
    },
    filename: (req : Request, file : Express.Multer.File, cb : ICallbackFile )=>{
        // console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({storage: storage})

export default upload;