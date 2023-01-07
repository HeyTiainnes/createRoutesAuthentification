import { Request, Response } from 'express';
import PlantService from '../services/PlantService';

class PlantController {
  private plantService = new PlantService();

  async getAll(req: Request, res: Response) {
    console.log('PlantController');

    try {
      const plants = await this.plantService.getAll();
      res.send({ status: 'OK', data: plants });
    } catch (error) {
      res.status(500).send({ status: 'Failed', message: error });
    }
  }
}

export default PlantController;
