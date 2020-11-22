import Models from '../models';
import Logger from '../../helpers/logger';

const users = [
    {
        username: 'Ahmed',
        email: 'ahmed@test.com',
        password: '1234567',
    },
    {
        username: 'Abdelrahman',
    },
    {
        username: 'Huda',
    },
    {
        username: 'Adel',
    },
    {
        username: 'Rana',
    },
    {
        username: 'Hana',
    },
    {
        username: 'Pansih',
    },
    {
        username: 'Mohammed',
    },
];

const seedUsers = async () => {
    await Models.User.bulkCreate(users);
    Logger.info('Added all users to database ........');
};

export default seedUsers;
