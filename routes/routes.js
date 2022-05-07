import { Router } from 'express';
import signUserRoutes from "./userRoutes/signUserRoutes.js";
import userRegisterRoute from "./registersRoutes/userRegistersRoute.js";

const router = Router();
router.use(signUserRoutes);
router.use(userRegisterRoute);

export default router;
