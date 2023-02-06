import express, {Request, Response} from "express";
import path from "path";
import mustache from "mustache-express";
import dotenv from "dotenv";
import mainRoutes from "./Routes/routes";
import painelRoutes from "./Routes/painel";


dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "Views"));
server.engine("mustache", mustache());
//server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.use(mainRoutes);
server.use(painelRoutes);
server.use((req: Request, res: Response)=>{
    res.status(404).send("Página não encontrada!");
})



/*server.get("/voo/:origem-:destino", (req: Request, res: Response)=>{
    let { origem, destino} = req.params;

    res.send("Procurando voos de "+ origem +" até "+ destino);
});*/
server.listen(process.env.PORT);