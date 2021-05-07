import * as express from 'express';
import * as bcrypt from 'bcryptjs';
import { userModel } from 'apps/backend/src/app/routes/users/user-models';
const router = express.Router();
const jwtStrategy = require('../../helpers/jwtStrategy');

// Validate an existing user and issue a JWT
router.post('/login', function (req, res, next) {
  userModel
    .findOne({ username: req.body.username })
    .then((user: any) => {
      if (!user) {
        return res.status(401).json({ success: false, message: 'could not find user' });
      }

      bcrypt.compare(req.body.password, user?.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const tokenObject = jwtStrategy.issueJWT(user);

          res.status(200).json({
            success: true,
            message: 'Connected successfully',
            user,
            token: tokenObject.token,
            expiresIn: tokenObject.expires,
          });
        } else {
          res.status(401).json({ success: false, message: 'you entered the wrong password' });
        }
      });
    })
    .catch(err => {
      next(err);
    });
});

router.post('/logout', (req: express.Request, res: express.Response) => {
  res.clearCookie('connect.sid');
  req.logout();
  return res.json({ success: true, message: 'loggedOut succesfully' });
});

router.get('/checkAuth', (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: 'User is unauthorized' });
  } else {
    res.status(200).json({ user: req.user });
  }
});

export default router;
