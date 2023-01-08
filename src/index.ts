import express from 'express';
import cors from 'cors';
import plantRouter from './routes/PlantRoutes';
import AppDataSource from './data-source';
import userRouter from './routes/UserRoutes';

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json()); // on paramètre la possibilité de récupérer des info dans un body en format JSON
    app.use(
      cors({
        origin: '*', // 'http://localhost:3000'
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
      })
    ); // on paramètre le fait qu'une appli puisse faire des requête avec ces méthodes référencées

    app.use('/api/plants', plantRouter);
    app.use('/api/users', userRouter);

    app.listen(process.env.PORT, () => {
      console.log(
        `L'api est en route sur l'adresse localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(`Une erreur s'est produite :`, err);
  });
