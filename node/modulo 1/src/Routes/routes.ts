import {Router,Request,Response} from "express";
import { request } from "http";
import * as homeController from "../Controllers/homeController";
import * as infoController from "../Controllers/infoController";
import * as userController from "../Controllers/userController";

const router = Router();

router.get("/", homeController.home);

router.get("/contato", infoController.contact);
router.get("/sobre", infoController.about);
router.get("/nome", userController.user);
router.post("/nome", userController.userAction);

export default router;