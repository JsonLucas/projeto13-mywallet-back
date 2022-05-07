import { Router } from 'express';
import signUserRoutes from "./userRoutes/signUserRoutes.js";
import userRegisterRoute from "./registersRoutes/userRegistersRoute.js";
import movimentation from './movimentationRoutes/movimentationRoutes.js';
import logout from './userRoutes/logoutRoute.js';

const router = Router();
router.use(signUserRoutes);
router.use(userRegisterRoute);
router.use(movimentation);
router.use(logout);

export default router;
