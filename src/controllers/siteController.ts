import {Request, Response} from 'express';
const siteController =  {
    home: (req : Request , res : Response) => {
       return  res.render('index.hbs', {});
    },
    getUpload: (req : Request , res : Response) => {
        return res.render('upload.hbs', {});
    },
    postUpload: (req : Request , res : Response) => {
        res.send("Upload image successfully!")
    }
}

export default siteController;