import User from '../models/interfaces/User';
import AppDataSource from '../data-source';
class UserService {
  async getAll(): Promise<User[]> {
    console.log('UserService');
    // A terme il y aura une Requete vers la BDD qui peut prendre du temps donc Asynchrone
    return AppDataSource.query('SELECT * FROM myusers');
  }
}

export default UserService;
