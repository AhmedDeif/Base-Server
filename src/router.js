import express from 'express';
import AuthRouter from './controllers/AuthController';
import UserRouter from './controllers/UserController';
import HealthController from './controllers/HealthController';

const router = express.Router();

// const buildAutoCrud = () => {
// ToDo: implement function to add automated routes to all controllers
// Have a controller config file which will contain all controllers that are exempted from auto crud
// obtain all functions from controllers and automaticcaly add them to routes
// };

// UserRouter.use(function(req, res, next) {
//     logger(req, res, next)
// });

router.use('/users', UserRouter);
router.use('/auth', AuthRouter);
router.use('/health', HealthController);

export default router;
