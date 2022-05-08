import {Router} from 'express';
import movimentationController from '../../controllers/movimentationController.js';
import updateMovimentationController from '../../controllers/updateMovimentationController.js';
import authMovimentationMiddleware from '../../middlewares/authMovimentationMiddleware.js';

const movimentation = Router();
movimentation.post('/movimentation', authMovimentationMiddleware, movimentationController);
movimentation.put('/movimentation', authMovimentationMiddleware, updateMovimentationController);

export default movimentation;