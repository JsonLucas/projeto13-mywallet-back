import { Router } from 'express';
import { signUpController } from '../../controllers/signUpController.js';
import { loginControlller } from '../../controllers/loginController.js';
import authLogin from '../../middlewares/authLoginMiddleware.js';
import authSinUpMiddleware from '../../middlewares/authSignUpMiddleware.js';

const signUserRoutes = Router();
signUserRoutes.post('/login', authLogin, loginControlller);
signUserRoutes.post('/sign-up', authSinUpMiddleware, signUpController);

export default signUserRoutes;