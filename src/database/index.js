import db from './models';
import seedUsers from './seeders/Users';
import Logger from '../helpers/logger';

const configureDatabse = async () => {
    try {
        await db.sequelize.authenticate();
        Logger.info('Database connection has been established successfully.');

        if (process.env.NODE_ENV === 'development') {
            await db.sequelize.drop();
            await db.sequelize.sync();
            Logger.info('Dropping all data in database.....');
            await seedUsers();
            Logger.info('Database seeding complete');
        } else {
            Logger.info(
                'Notice: Other database enviroments have not been set up ...............'
            );
        }

        Logger.info('Database connection has been established successfully.');
    } catch (error) {
        Logger.error('Unable to connect to the database:', error);
    }
};

export default configureDatabse;
