import * as express from 'express';
import { isEqual, pick } from 'lodash/fp';
import { createUser, getProfile, updateUserProfile } from '../../../../../../libs/database-logics/src/index';
import { User } from '../../../../../../libs/data-models/index';
import { ensureAuthenticated, validateMiddleware, userFieldsValidator, isUserValidator } from '../../helpers/index';

const router = express.Router();

// Routes
router.post('/register', userFieldsValidator, validateMiddleware(isUserValidator), (req, res) => {
  const userDetails: User = req.body;
  const user = createUser(userDetails, res, req);
  return user;
});

router.get('/profile', ensureAuthenticated, (req, res) => {
  const user = getProfile(req, res);
  return user;
});

router.post(
  '/updateProfile/:id',
  ensureAuthenticated,
  userFieldsValidator,
  validateMiddleware(isUserValidator),
  (req, res) => {
    const userDetails: User = req.body;
    const userUpdated = updateUserProfile(userDetails, res, req, req.params.id);
    return userUpdated;
  }
);

export default router;
