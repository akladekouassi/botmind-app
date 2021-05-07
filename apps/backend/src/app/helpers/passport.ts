const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');
import { userModel } from 'apps/backend/src/app/routes/users/user-models';

const pathToKey = path.join(__dirname, '../../..', 'id_rsa_priv.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, function (jwt_payload, done) {
      userModel.findOne({ _id: jwt_payload.sub }, function (err, user) {
        if (err) {
          return done(err, false, { success: false, message: 'something went wrong' });
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false, { success: false, message: 'could not find user' });
        }
      });
    })
  );
};
