import Models from '../database/models';

export async function findUserByEmail(email) {
    try {
        const user = await Models.User.findOne({ where: { email } });
        return user;
    } catch (error) {
        return error;
    }
}

export async function findUserById(id) {
    try {
        const user = await Models.User.findOne({ where: { id } });
        return user;
    } catch (error) {
        return error;
    }
}

export async function deleteUserById(id) {
    try {
        await Models.User.destroy({ where: { id } });
    } catch (error) {
        return error;
    }
}

export async function getAllUsers() {
    try {
        const users = await Models.User.findAll();
        return users;
    } catch (error) {
        return error;
    }
}

export async function createUser(user) {
    const { password } = user;
    const { email } = user;
    const { username } = user;
    if (!password) {
        throw new Error('Missing user password');
    }
    if (!email) {
        throw new Error('Missing user email');
    }
    if (!username) {
        throw new Error('Missing username');
    }
    if (password && email && username) {
        const newUser = await Models.User.create({
            email,
            password,
            username,
        });
        return newUser;
    }
}
export async function updateUser(id, data) {
    try {
        await Models.User.update(
            {
                ...data,
            },
            {
                where: { id },
                returning: true,
            }
        );
        const user = await findUserById(id);
        return user.toJSON();
    } catch (error) {
        return error;
    }
}
