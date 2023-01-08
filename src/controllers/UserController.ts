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
      password: req.body.password,
    };
    //on verifie la recuperation
    if (newUser.email === undefined || newUser.password === undefined) {
      res.status(400).send({ message: "il manque une info" });
      return;
    }
    bcrypt.hash(newUser.password, 10, async (err, hash) => {
      console.log("err", err);

      // je dois rester entre ces accolodes//
      // on ecrase le password pour le remplacer par le password hashé
      console.log("wewUser sans hash :", newUser);
      console.log("le hash est généré : ", hash);
      newUser.password = hash;
      console.log("newUser avec hash :", newUser);
      await this.userService.createUser(newUser);
      res.status(200).send({ message: "un nouvel utilisateur a été créé " });
    });
  }
}
export default UserController;
