import Models from '../database/models';
import bcrypt from 'bcrypt-nodejs';
import { Strategy as LocalStrategy } from 'passport-local';

export let strategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    async function(email, password, done) {
        let user = await Models.User.findOne({ where: { email } });
        if (!user) {
            return done(null, false, { message: 'User not found.' });
        }
        // verify password
        bcrypt.compare(password, user.password, function (err, res) {
            if (!res) {
                console.log("Could not match password")
                return done(null, false, {
                    message: 'Invalid Password'
                });
            }
            return done(null, user, {
                message: 'Logged In Successfully'
            })
        })
    }
);