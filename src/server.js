import express from "express";
import { PORT } from "./config/serverConfig";
import { Logger } from "./middleware/logger";
import bodyParser from "body-parser";
import passport from 'passport';
import {strategy} from './services/AuthService';
import { configureDatabse } from './database';
import Router from './router';


if (process.env.production === true) {
  // start in production mode
} else {
    // start in dev/stage mode
}

export const startServer = async () => {
    var app = express();
	var port = process.env.PORT || PORT;
	
	await configureDatabse();

	app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(passport.initialize());
    passport.use(strategy);

    Router.use(function(req, res, next) {
		Logger(req, res, next)
	});
    app.use('/api', Router);

    app.listen(port);
    console.log(`Server started successfully and listening on port ${port}`);
}