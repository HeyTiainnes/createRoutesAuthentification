import User from "../models/interfaces/User";
import AppDataSource from "../data-source";

class UserService {
  // methode pour creer le user, on l'importe aussi dans le controller
  // dans bcrypt via this.userService
  async createUser(userToCreate: User): Promise<void> {
    console.log("UserService");
    //je verifie que je recupere bien le parametre userToCreate
    console.log("le parametre userToCreate est :", userToCreate);
    // A terme il y aura une Requete vers la BDD qui peut prendre du temps donc Asynchrone
    return AppDataSource.query(
      `INSERT INTO myusers (email, password) VALUES ('${userToCreate.email}', '${userToCreate.password}')`
    );
  }
}

export default UserService;
