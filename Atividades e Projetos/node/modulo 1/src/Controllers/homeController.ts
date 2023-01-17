import {Request, Response} from "express";
import { Product } from "../Models/Product";

export const home = (req: Request, res: Response)=>{
    let age: number = 70;
    let showOld: boolean = false;
    
    if (age > 60) {
        showOld = true
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(15);
    
    res.render("Pages/home", { 
        showWelcome: true,
        showOld,
        products: list, 
        expensiveList,
        frasesDoDia: [
            "Cabeça Grande, Mente pequena",
            "Jujuba é Tudo Igual!"
        ]
    });
    
};