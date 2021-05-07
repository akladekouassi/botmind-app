// const crypto = require('crypto');
import * as crypto from 'crypto';
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const pathToKey = path.join(__dirname, '../../..', 'id_rsa_priv.pem');
console.log('THE FILLEEE:', pathToKey);
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

/**
 * @param {*} user - The user object.  We need this to set the JWT `sub` payload property to the MongoDB user ID
 */
function issueJWT(user) {
  const _id = user._id;

  const expiresIn = '1d';

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });

  return {
    token: 'Bearer ' + signedToken,
    expires: expiresIn,
  };
}

module.exports.issueJWT = issueJWT;
