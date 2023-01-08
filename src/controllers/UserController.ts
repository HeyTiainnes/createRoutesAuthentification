import { Request, Response } from "express";
import UserService from "../services/UserService";
import User from "../models/interfaces/User";
class UserController {
  private userService = new UserService();
  async inscription(req: Request, res: Response) {
    console.log("Usercontroler - inscription - body : ", req.body);
    //On creer une variable newUser, de type user et on y explicite les paramètres
    const newUser: User = {
      //structure de l'objet : l'email viendra de req.body.email
      email: req.body.email,
      passord: req.body.passord,
    };
    //on verifie la recuperation
    if (newUser.email === undefined || newUser.passord === undefined) {
      res.status(400).send({ message: "il manque une info" });
      return;
    }
  }
}
export default UserController;
