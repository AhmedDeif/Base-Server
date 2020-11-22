import Models from '../models';

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
    console.log('Added all users to database ........');
};

export default seedUsers;
