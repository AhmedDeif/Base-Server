import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import isAuthenticated from '../../middleware/isAuthenticated';
import { SECRET, AUDIENCE, ISSUER } from '../../config/serverConfig';
import {
    findUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUserById,
} from '../../services/UserService';
import Logger from '../../helpers/logger';

const userRouter = express.Router({ mergeParams: true });

userRouter.use((req, res, next) => {
    if (req.method !== 'POST') {
        return isAuthenticated(req, res, next);
    }
    next();
});

userRouter.get('/', async (req, res, next) => {
    try {
        Logger.info(`User with id: ${req.user} requested to list all users.`);
        const users = await getAllUsers();
        res.json(users);
    } catch (e) {
        // this will eventually be handled by your error handling middleware
        next(e);
    }
});

userRouter.get('/:userId', async (req, res, next) => {
    try {
        const id = req.params.userId;
        const empUser = await findUserById(id);
        if (empUser) {
            res.json(empUser);
        } else {
            res.status(404).json({
                Message: 'User not found',
            });
        }
    } catch (e) {
        next(e);
    }
});

userRouter.put('/:userId', async (req, res) => {
    try {
        const id = req.params.userId;
        if (id === req.user) {
            Logger.info(`Finding user with id: ${id}`);
            const user = await updateUser(id, req.body);
            Logger.info(user);
            res.json({
                message: 'user updated successfully',
                user: { ...user },
            });
        } else {
            res.status(401).json();
        }
    } catch (e) {
        res.status(500).json({
            Message: 'Server Error occured',
        });
    }
});

userRouter.post('/', async (req, res) => {
    try {
        const user = await createUser(req.body);
        const token = jsonwebtoken.sign({ id: user.id }, SECRET, {
            expiresIn: 86400,
            audience: AUDIENCE,
            issuer: ISSUER,
        });
        Logger.info(`created a token for user: ${token}`);
        user.token = token;
        Logger.info(user);
        res.send({
            ...user.toJSON(),
            token,
        });
    } catch (e) {
        res.json('error bro ...');
    }
});

userRouter.delete('/:userId', async (req, res, next) => {
    try {
        const id = req.params.userId;
        const empUser = await findUserById(id);
        if (empUser) {
            await deleteUserById(id);
            res.json({
                Message: 'User deleted',
            });
        } else {
            res.status(404).json({
                Message: 'User not found',
            });
        }
    } catch (e) {
        next(e);
    }
});

export default userRouter;
