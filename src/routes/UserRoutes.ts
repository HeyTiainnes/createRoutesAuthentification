import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController();

// on met en place une route post avec req et res sur la route inscription
userRouter.post("/inscription", (req, res) => {
  userController.inscription(req, res); // connexion de la methode du userController
});

export default userRouter;
