import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer'

import PointController from './controller/PointsController'
import ItemsController from './controller/ItemsController'


const routes = express.Router()
const upload = multer(multerConfig)

const pointController = new PointController()
const itemsController = new ItemsController()

routes.get('/items',itemsController.index );

routes.post('/points', upload.single('image') ,pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes