import Models from '../database/models';

export async function findUserByEmail(email) {
    try {
        const user = await Models.User.findOne({ where: { email } });
        return user;
    }
    catch (error) {
        return error;
    }
}

export async function findUserById(id) {
    try {
        const user = await Models.User.findOne({ where: { id } });
        return user;
    }
    catch (error) {
        return error;
    }
}

export async function getAllUsers() {
    try {
        const users = await Models.User.findAll()
        return users;
    }
    catch (error) {
        return error;
    }
}

export async function createUser(user) {
    try {
        const password = user.password;
		const email = user.email;
		const username = user.username;
		if ( password && email && username) {
			const newUser = await Models.User.create({
				email,
				password,
				username
			});
			return newUser;
		} else {
			return Error("Missing Data");
		}
    }
    catch (error) {
        return error;
    }
}

