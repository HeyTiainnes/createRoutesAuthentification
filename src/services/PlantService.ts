import Plant from '../models/interfaces/Plant';
import AppDataSource from '../data-source';
class PlantService {
  async getAll(): Promise<Plant[]> {
    console.log('PlantService');
    // A terme il y aura une Requete vers la BDD qui peut prendre du temps donc Asynchrone
    return AppDataSource.query('SELECT * FROM plants');
  }
}

export default PlantService;
