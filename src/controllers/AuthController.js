import express from "express";
import passport from 'passport';

const authRouter = express.Router({mergeParams: true});

authRouter.post('/', async function(req, res, next) {
    const password = req.body.password;
    const email = req.body.email;

    if ( password && email) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.json({msg: "could not login"}); }
            res.json(user);
          })(req, res, next);
    } else {
        res.json({message: "A user with this email does not exist"});
    }
});

export default authRouter;