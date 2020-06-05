import express from 'express'

import PointController from './controller/PointsController'
import ItemsController from './controller/ItemsController'


const routes = express.Router()
const pointController = new PointController()
const itemsController = new ItemsController()

routes.get('/items',itemsController.index );

routes.post('/points', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes