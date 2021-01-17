import express from 'express';
import AuthRouter from './controllers/v1/AuthController';
import UserRouter from './controllers/v1/UserController';
import HealthController from './controllers/v1/HealthController';

const router = express.Router();

// const buildAutoCrud = () => {
// ToDo: implement function to add automated routes to all controllers
// Have a controller config file which will contain all controllers that are exempted from auto crud
// obtain all functions from controllers and automaticcaly add them to routes
// };

// UserRouter.use(function(req, res, next) {
//     logger(req, res, next)
// });

router.use('/v1/users', UserRouter);
router.use('/v1/auth', AuthRouter);
router.use('/health', HealthController);

export default router;
