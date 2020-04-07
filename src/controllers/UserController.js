import Models from '../database/models';
import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { isAuthenticated } from '../middleware/isAuthenticated'
import { 
	SECRET,
	AUDIENCE,
	ISSUER
 } from '../config/serverConfig';
import { 
	findUserById,
	getAllUsers,
	createUser
 } from '../services/UserService';

const userRouter = express.Router({mergeParams: true});


// userRouter.use(function(req, res, next) {
// 	if (req.method != "POST") {
// 		// apply isAuthenticated
// 	}
// });

// userRouter.use(isAuthenticated);

userRouter.get('/',isAuthenticated);

userRouter.get('/', async function(req, res, next) {
    try {
		console.log(`User with id: ${req.user} requested to list all users.`)
        const users = await getAllUsers();
        res.json(users);
    } catch (e) {
        //this will eventually be handled by your error handling middleware
        next(e) 
    }
});

userRouter.get('/:userId', async function(req, res, next) {
	try {
		const id = req.params.userId;
		const empUser = await findUserById(id);
		res.json(empUser);
	} catch(e) {
		next(e);
	}
});

userRouter.put('/:userId', async function(req, res, next) {
	const id = req.params.userId;
	console.log(`Finding user with id: ${id}`);
	const { count, rows } = await Models.User.findAndCountAll({
		where: {
			id
		},
	});
	if (count == 1) {
		const user = rows[0];
		// let updatedUser = { 
		// 	...user
		// }
		updatedUser.save();
		res.json({'message': 'user updated successfully'});
	} else {
		res.json({'message': 'user not found'});
	}
});

userRouter.post('/', async function(req, res, next) {
    try {
		var user = await createUser(req.body);
		const token = jsonwebtoken.sign({id: user.id}, SECRET, {expiresIn: 86400, audience: AUDIENCE, issuer: ISSUER});
		console.log(`created a token for user: ${token}`);
		user['token'] = token;
		console.log(user);
		res.send({ 
			...user.toJSON(), 
			token: token
		});
    } catch (e) {
        res.json("error bro ...");
    }
}); 


export default userRouter;

