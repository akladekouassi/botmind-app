import * as passport from 'passport';
import * as express from 'express';
import * as bcrypt from 'bcryptjs';
import { authenticateUser, userModel } from '../../../../../../libs/database-logics/src/index';
import { User } from '../../../../../../libs/data-models/index';
import { ensureAuthenticated } from '../../helpers/checker';
const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

// configure passport for local strategy
passport.use(
  new LocalStrategy(function (username: string, password: string, done: Function) {
    return authenticateUser(username, password, done);
  })
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userModel.findById(id, (err, user) => {
    done(err, user);
  });
});

// authentication routes
router.post('/login', passport.authenticate('local'), (req: any, res: any): void => {
  if (req.body.remember) {
    req.session!.cookie.maxAge = 24 * 60 * 60 * 1000 * 30; // Expire in 30 days
  } else {
    req.session!.cookie.expires = false;
  }

  res.send({ user: req.user });
});

// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', function (err, user, info) {
//     if (err) {
//       return res.status(400).json({ errors: err });
//     }
//     if (!user) {
//       return res.status(400).json({ errors: 'No user found' });
//     }
//     req.logIn(user, function (err) {
//       const token = jwt.sign({ userId: user._id }, 'botmind', { expiresIn: '48h' });
//       if (err) {
//         return res.status(400).json({ errors: err });
//       }
//       console.log('ISSSSS', req.isAuthenticated());
//       return res.status(200).json({ success: true, message: 'Success!', user });
//     });
//   })(req, res, next);
// });

router.post('/logout', (req: express.Request, res: express.Response) => {
  res.clearCookie('connect.sid');
  req.logout();
  req.session!.destroy(function (err) {
    //   res.redirect('/');
    return res.json({ message: 'loggedOut succesfully' });
  });
});

router.get('/checkAuth', (req, res) => {
  /* istanbul ignore next */
  if (!req.user) {
    res.status(401).json({ error: 'User is unauthorized' });
  } else {
    res.status(200).json({ user: req.user });
  }
});

export default router;
