import { Router } from 'express';
import PlantController from '../controllers/PlantController';

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get('/', (req, res) => {
  console.log('PlantRouter');
  plantController.getAll(req, res);
});

export default plantRouter;
