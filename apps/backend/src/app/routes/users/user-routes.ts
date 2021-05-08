import * as express from 'express';
import { isEqual, pick } from 'lodash/fp';
const passport = require('passport');
import {
  createUser,
  getProfile,
  updateUserProfile,
  checkUsername,
  checkEmail,
  getAllUsers,
  deleteAccount,
} from '../../../../../../libs/database-logics/src/index';
import { User } from '../../../../../../libs/data-models/index';
import { ensureAuthenticated, validateMiddleware, userFieldsValidator, isUserValidator } from '../../helpers/index';

const router = express.Router();

// Routes
router.post('/users/register', userFieldsValidator, validateMiddleware(isUserValidator), (req, res) => {
  const userDetails: User = req.body;
  const user = createUser(userDetails, res, req);
  return user;
});

router.get('/users/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  const user = getProfile(req, res);
  return user;
});

router.get('/users/getAllUsers', passport.authenticate('jwt', { session: false }), (req, res) => {
  const users = getAllUsers(res);
  return users;
});

router.post('/users/deleteAccount', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { username, email } = req.body;
  const response = deleteAccount(username, email, req, res);
  return response;
});

/* ============================================================
     Route to check if user's email is available for registration
  ============================================================ */
router.get('/users/checkEmail/:email', (req, res) => {
  const user = checkEmail(req.params.email, res);
  return user;
});

/* ===============================================================
     Route to check if user's username is available for registration
  =============================================================== */
router.get('/users/checkUsername/:username', (req, res) => {
  const user = checkUsername(req.params.username, res);
  return user;
});

router.post(
  '/users/updateProfile/:id',
  passport.authenticate('jwt', { session: false }),
  userFieldsValidator,
  validateMiddleware(isUserValidator),
  (req, res) => {
    const userDetails: User = req.body;
    const userUpdated = updateUserProfile(userDetails, res, req, req.params.id);
    return userUpdated;
  }
);

export default router;
