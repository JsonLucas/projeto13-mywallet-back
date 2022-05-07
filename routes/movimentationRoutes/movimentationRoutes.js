import {Router} from 'express';
import movimentationController from '../../controllers/movimentationController.js';
import authMovimentationMiddleware from '../../middlewares/authMovimentationMiddleware.js';

const movimentation = Router();
movimentation.post('/movimentation', authMovimentationMiddleware, movimentationController);

export default movimentation;