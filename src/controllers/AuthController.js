import express from 'express';
import passport from 'passport';

const authRouter = express.Router({ mergeParams: true });

authRouter.post('/', async (req, res, next) => {
    const { password } = req.body;
    const { email } = req.body;

    if (password && email) {
        passport.authenticate('local', (err, user) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.json({ msg: 'could not login' });
            }
            return res.json(user);
        })(req, res, next);
    } else {
        return res.json({ message: 'A user with this email does not exist' });
    }
});

export default authRouter;
