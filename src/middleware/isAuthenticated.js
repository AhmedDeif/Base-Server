import Passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { 
    SECRET,
    AUDIENCE,
    ISSUER
 } from '../config/serverConfig';


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET,
    issuer: ISSUER,
    audience: AUDIENCE,
    passReqToCallback: false
};

export const isAuthenticated = function(req, res, next) {
    Passport.use(new JwtStrategy(options, function(payload, done) {
            const user = payload.id;
            if (user) {
                done(null, user);
            } else {
                done("No User ID found in payload", null);
            }            
        })
    );

    Passport.authenticate('jwt', function(error, user, info) {
        if (error) {
            return res.json({"error": "la yastsa", info: error});
        }
        if (!user) {
            return res.sendStatus(401);
        }
        req.user = user;
        next();
    })(req, res, next);
}