import express from "express";
import AuthRouter from './controllers/AuthController';
import UserRouter from './controllers/UserController';
import isAuthenticated from './middleware/isAuthenticated';
import logger from './middleware/logger';

var router = express.Router();


const buildAutoCrud = () => {
    // ToDo: implement function to add automated routes to all controllers
    // Have a controller config file which will contain all controllers that are exempted from auto crud
    // obtain all functions from controllers and automaticcaly add them to routes
}


// UserRouter.use(function(req, res, next) {
//     logger(req, res, next)
//     console.log("adding middleware to router");
// });

router.use('/users', UserRouter);
router.use('/auth', AuthRouter)

router.get('/', function(req,res) {
    res.json({message: "Hoooray!!, your running.... Node monitoring is working too"});
});


export default router;