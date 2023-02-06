import {Router,Request,Response} from "express";
import { request } from "http";

const router = Router();

router.get("/painel", (req: Request, res: Response)=>{
    res.send("Home do Painel");
});
router.get("/noticias", (req: Request, res: Response)=>{
    res.send("Espaço para notícias");
});

export default router;