import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';
import { PORT } from './config/serverConfig';
import AccessLogger from './middleware/accessLogger';
import Logger from './helpers/logger';
import strategy from './services/AuthService';
import configureDatabse from './database';
import Router from './router';

if (process.env.production === true) {
    // start in production mode
    Logger.info('Starting server in PRODUCTION mode');
} else {
    // start in dev/stage mode
    Logger.info('Starting server in DEVELOPMENT mode');
}

const startServer = async () => {
    const app = express();
    const port = process.env.PORT || PORT;

    app.use('/doc', express.static(`${__dirname}/apidoc`));

    await configureDatabse();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(passport.initialize());
    passport.use(strategy);

    app.use(AccessLogger);

    app.use('/api', Router);

    app.get('/doc', async (req, res) => {
        res.sendFile(path.join(`${__dirname}/apidoc/index.html`));
    });

    app.listen(port);
    Logger.info(`Server started successfully and listening on port ${port}`);
};

export default startServer;
