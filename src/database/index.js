import db from './models';
import { seedUsers } from './seeders/Users';

export const configureDatabse = async () => {
	try {
    await db.sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    if (process.env.NODE_ENV == 'development') {
      await db.sequelize.drop();
      await db.sequelize.sync();
      await seedUsers();
      console.log(`Dropping all data in database.....`);
      console.log(`Adding data to database.....`);

    } else {
      console.log(`other enviroments have not been set up ...............`);
    }

    console.log('Database connection has been established successfully.');
    
	  } catch (error) {
		console.error('Unable to connect to the database:', error);
	  }
};
