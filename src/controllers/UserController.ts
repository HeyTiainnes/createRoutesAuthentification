import { Request, Response } from "express";
import UserService from "../services/UserService";
import User from "../models/interfaces/User";
import bcrypt from "bcrypt";

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
    bcrypt.hash(newUser.passord, 10, (err, hash) => {
      console.log("err", err);
      console.log("le hash est généré : ", hash);
      // je doits rester entre ces accolodes//
    });
  }
}
export default UserController;
