import {Request, Response} from "express";

export const contact = (req: Request, res: Response)=>{
    res.render("Pages/contato");
};
    
export  const about = (req: Request, res: Response)=>{
        res.render("Pages/sobre");
       };

