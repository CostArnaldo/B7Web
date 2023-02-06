import {Request, Response} from "express";

export const user = (req: Request, res: Response) => {
    res.render("Pages/nome")
};

export const userAction = (req: Request, res: Response) => {
    console.log("query string", req.query);
    
    let nome: string = req.body.nome as string;
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.idade) {
        let anoNascimento: number = parseInt(req.body.idade as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render("Pages/nome", { 
        nome, idade, mostrarIdade 
    })
};