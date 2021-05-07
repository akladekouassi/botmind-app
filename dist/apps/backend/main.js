(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/backend/src/app/helpers/checker.ts":
/*!*************************************************!*\
  !*** ./apps/backend/src/app/helpers/checker.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMiddleware = exports.ensureAuthenticated = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const express_validator_1 = __webpack_require__(/*! express-validator */ "express-validator");
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    /* istanbul ignore next */
    res.status(401).send({
        error: 'Unauthorized',
    });
};
exports.ensureAuthenticated = ensureAuthenticated;
const validateMiddleware = (validations) => {
    return (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield Promise.all(validations.map((validation) => validation.run(req)));
        const errors = express_validator_1.validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        res.status(422).json({ errors: errors.array() });
    });
};
exports.validateMiddleware = validateMiddleware;


/***/ }),

/***/ "./apps/backend/src/app/helpers/dbConnexion.ts":
/*!*****************************************************!*\
  !*** ./apps/backend/src/app/helpers/dbConnexion.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
mongoose
    .connect(`mongodb+srv://${process.env.MONGODB_USER_PASS}@${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}?authSource=${process.env.MONGODB_AUTH_SOURCE}&authMechanism=${process.env.MONGODB_AUTH_MECHANISME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log('MONGODB connected successfully'))
    .catch(err => console.log('Error occured when connecting to the DB:', err));


/***/ }),

/***/ "./apps/backend/src/app/helpers/index.ts":
/*!***********************************************!*\
  !*** ./apps/backend/src/app/helpers/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./checker */ "./apps/backend/src/app/helpers/checker.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./dbConnexion */ "./apps/backend/src/app/helpers/dbConnexion.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./validators */ "./apps/backend/src/app/helpers/validators.ts"), exports);


/***/ }),

/***/ "./apps/backend/src/app/helpers/jwtStrategy.ts":
/*!*****************************************************!*\
  !*** ./apps/backend/src/app/helpers/jwtStrategy.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const pathToKey = path.join(__dirname, '../../..', 'id_rsa_priv.pem');
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


/***/ }),

/***/ "./apps/backend/src/app/helpers/passport.ts":
/*!**************************************************!*\
  !*** ./apps/backend/src/app/helpers/passport.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const JwtStrategy = __webpack_require__(/*! passport-jwt */ "passport-jwt").Strategy;
const ExtractJwt = __webpack_require__(/*! passport-jwt */ "passport-jwt").ExtractJwt;
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const user_models_1 = __webpack_require__(/*! apps/backend/src/app/routes/users/user-models */ "./apps/backend/src/app/routes/users/user-models.ts");
const pathToKey = path.join(__dirname, '../../..', 'id_rsa_priv.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256'],
};
module.exports = passport => {
    passport.use(new JwtStrategy(options, function (jwt_payload, done) {
        user_models_1.userModel.findOne({ _id: jwt_payload.sub }, function (err, user) {
            if (err) {
                return done(err, false, { success: false, message: 'something went wrong' });
            }
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false, { success: false, message: 'could not find user' });
            }
        });
    }));
};


/***/ }),

/***/ "./apps/backend/src/app/helpers/validators.ts":
/*!****************************************************!*\
  !*** ./apps/backend/src/app/helpers/validators.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEntityValidator = exports.isNotificationPatchValidator = exports.isNotificationsBodyValidator = exports.isCommentValidator = exports.isTransactionPublicQSValidator = exports.isTransactionPatchValidator = exports.isTransactionPayloadValidator = exports.isTransactionQSValidator = exports.sanitizeRequestStatus = exports.sanitizeTransactionStatus = exports.isUserValidator = exports.isBankAccountValidator = exports.userFieldsValidator = exports.searchValidation = exports.shortIdValidation = void 0;
const express_validator_1 = __webpack_require__(/*! express-validator */ "express-validator");
const shortid_1 = __webpack_require__(/*! shortid */ "shortid");
const fp_1 = __webpack_require__(/*! lodash/fp */ "lodash/fp");
const TransactionStatusValues = Object.values({});
const RequestStatusValues = Object.values({});
const DefaultPrivacyLevelValues = Object.values({});
const NotificationsTypeValues = Object.values({});
// Validators
const isShortId = (value) => shortid_1.isValid(value);
const shortIdValidation = (key) => express_validator_1.check(key).custom(isShortId);
exports.shortIdValidation = shortIdValidation;
exports.searchValidation = express_validator_1.query('q').exists();
exports.userFieldsValidator = express_validator_1.oneOf([
    express_validator_1.check('firstName').exists(),
    express_validator_1.check('lastName').exists(),
    express_validator_1.check('password').exists(),
    express_validator_1.check('balance').exists(),
    express_validator_1.check('avatar').exists(),
    express_validator_1.check('defaultPrivacyLevel').exists(),
]);
exports.isBankAccountValidator = [
    express_validator_1.body('bankName').isString().trim(),
    express_validator_1.body('accountNumber').isString().trim(),
    express_validator_1.body('routingNumber').isString().trim(),
];
exports.isUserValidator = [
    express_validator_1.check('firstName').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.check('lastName').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.check('username').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.check('password').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.check('email').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.check('phoneNumber').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.check('balance').optional({ checkFalsy: true }).isNumeric().trim(),
    express_validator_1.check('avatar').optional({ checkFalsy: true }).isURL().trim(),
    express_validator_1.check('defaultPrivacyLevel').optional({ checkFalsy: true }).isIn(['public', 'private', 'contacts']),
];
exports.sanitizeTransactionStatus = express_validator_1.sanitizeQuery('status').customSanitizer(value => {
    /* istanbul ignore if*/
    if (fp_1.includes(value, TransactionStatusValues)) {
        return value;
    }
    return;
});
// default request status to undefined if not provided
exports.sanitizeRequestStatus = express_validator_1.sanitizeQuery('requestStatus').customSanitizer(value => {
    /* istanbul ignore if*/
    if (fp_1.includes(value, RequestStatusValues)) {
        return value;
    }
    return;
});
exports.isTransactionQSValidator = [
    express_validator_1.query('status').isIn(TransactionStatusValues).optional().trim(),
    express_validator_1.query('requestStatus').optional({ checkFalsy: true }).isIn(RequestStatusValues).trim(),
    express_validator_1.query('receiverId').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.query('senderId').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.query('rangeStartTs').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.query('rangeEndTs').optional({ checkFalsy: true }).isString().trim(),
    express_validator_1.query('amountMax').optional({ checkFalsy: true }).isNumeric().trim(),
    express_validator_1.query('amountMin').optional({ checkFalsy: true }).isNumeric().trim(),
];
exports.isTransactionPayloadValidator = [
    express_validator_1.body('transactionType').isIn(['payment', 'request']).trim(),
    express_validator_1.body('privacyLevel').optional().isIn(DefaultPrivacyLevelValues).trim(),
    express_validator_1.body('source').optional().isString().trim(),
    express_validator_1.body('receiverId').isString().trim(),
    express_validator_1.body('description').isString().trim(),
    express_validator_1.body('amount').isNumeric().trim().toInt(),
];
exports.isTransactionPatchValidator = [express_validator_1.body('requestStatus').isIn(RequestStatusValues)];
exports.isTransactionPublicQSValidator = [express_validator_1.query('order').optional({ checkFalsy: true }).isIn(['default'])];
exports.isCommentValidator = express_validator_1.body('content').isString().trim();
exports.isNotificationsBodyValidator = [
    express_validator_1.body('items.*.type').isIn(NotificationsTypeValues).trim(),
    express_validator_1.body('items.*.transactionId').custom(isShortId),
];
exports.isNotificationPatchValidator = [express_validator_1.body('isRead').isBoolean()];
exports.isValidEntityValidator = [
    express_validator_1.check('entity')
        .isIn(['users', 'contacts', 'bankaccounts', 'notifications', 'transactions', 'likes', 'comments', 'banktransfers'])
        .trim(),
];


/***/ }),

/***/ "./apps/backend/src/app/routes/auth/auth.ts":
/*!**************************************************!*\
  !*** ./apps/backend/src/app/routes/auth/auth.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(/*! express */ "express");
const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const user_models_1 = __webpack_require__(/*! apps/backend/src/app/routes/users/user-models */ "./apps/backend/src/app/routes/users/user-models.ts");
const router = express.Router();
const jwtStrategy = __webpack_require__(/*! ../../helpers/jwtStrategy */ "./apps/backend/src/app/helpers/jwtStrategy.ts");
// Validate an existing user and issue a JWT
router.post('/login', function (req, res, next) {
    user_models_1.userModel
        .findOne({ username: req.body.username })
        .then((user) => {
        if (!user) {
            return res.status(401).json({ success: false, message: 'could not find user' });
        }
        bcrypt.compare(req.body.password, user === null || user === void 0 ? void 0 : user.password, (err, isMatch) => {
            if (err)
                throw err;
            if (isMatch) {
                const tokenObject = jwtStrategy.issueJWT(user);
                res.status(200).json({
                    success: true,
                    message: 'Connected successfully',
                    user,
                    token: tokenObject.token,
                    expiresIn: tokenObject.expires,
                });
            }
            else {
                res.status(401).json({ success: false, message: 'you entered the wrong password' });
            }
        });
    })
        .catch(err => {
        next(err);
    });
});
router.post('/logout', (req, res) => {
    res.clearCookie('connect.sid');
    req.logout();
    return res.json({ success: true, message: 'loggedOut succesfully' });
});
router.get('/checkAuth', (req, res) => {
    if (!req.user) {
        res.status(401).json({ error: 'User is unauthorized' });
    }
    else {
        res.status(200).json({ user: req.user });
    }
});
exports.default = router;


/***/ }),

/***/ "./apps/backend/src/app/routes/blogs/blog-models.ts":
/*!**********************************************************!*\
  !*** ./apps/backend/src/app/routes/blogs/blog-models.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose"); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose
// Validate Function to check blog title length
let titleLengthChecker = title => {
    if (!title) {
        return false; // Return error
    }
    else {
        // Check the length of title
        if (title.length < 5 || title.length > 50) {
            return false; // Return error if not within proper length
        }
        else {
            return true; // Return as valid title
        }
    }
};
let alphaNumericTitleChecker = title => {
    if (!title) {
        return false;
    }
    else {
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        return regExp.test(title); // Return regular expression test results (true or false)
    }
};
// Array of Title Validators
const titleValidators = [
    // First Title Validator
    {
        validator: titleLengthChecker,
        message: 'Title must be more than 5 characters but no more than 50',
    },
    // Second Title Validator
    {
        validator: alphaNumericTitleChecker,
        message: 'Title must be alphanumeric',
    },
];
// Validate Function to check body length
let bodyLengthChecker = body => {
    // Check if body exists
    if (!body) {
        return false; // Return error
    }
    else {
        // Check length of body
        if (body.length < 5 || body.length > 1000) {
            return false; // Return error if does not meet length requirement
        }
        else {
            return true; // Return as valid body
        }
    }
};
// Array of Body validators
const bodyValidators = [
    // First Body validator
    {
        validator: bodyLengthChecker,
        message: 'Body must be more than 5 characters but no more than 500.',
    },
];
// Validate Function to check comment length
let commentLengthChecker = comment => {
    // Check if comment exists
    if (!comment[0]) {
        return false; // Return error
    }
    else {
        // Check comment length
        if (comment[0].length < 1 || comment[0].length > 200) {
            return false; // Return error if comment length requirement is not met
        }
        else {
            return true; // Return comment as valid
        }
    }
};
// Array of Comment validators
const commentValidators = [
    // First comment validator
    {
        validator: commentLengthChecker,
        message: 'Comments may not exceed 200 characters.',
    },
];
// Blog Model Definition
const blogSchema = new Schema({
    title: { type: String, required: true, validate: titleValidators },
    body: { type: String, required: true, validate: bodyValidators },
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    modifiedAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },
    likedBy: { type: Array },
    dislikes: { type: Number, default: 0 },
    dislikedBy: { type: Array },
    comments: [
        {
            comment: { type: String, validate: commentValidators },
            commentator: { type: String },
        },
    ],
});
// Export Module/Schema
module.exports = mongoose.model('Blog', blogSchema);


/***/ }),

/***/ "./apps/backend/src/app/routes/blogs/blog-routes.ts":
/*!**********************************************************!*\
  !*** ./apps/backend/src/app/routes/blogs/blog-routes.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(/*! express */ "express");
const passport = __webpack_require__(/*! passport */ "passport");
const index_1 = __webpack_require__(/*! libs/database-logics/src/index */ "./libs/database-logics/src/index.ts");
const router = express.Router();
/* ===============================================================
     ADD NEW BLOG POST
  =============================================================== */
router.post('/addNewBlog', passport.authenticate('jwt', { session: false }), (req, res) => {
    const blogFromQuery = req.body;
    const blog = index_1.createNewBlog(blogFromQuery, res);
    return blog;
});
/* ===============================================================
     GET ALL BLOGS
  =============================================================== */
router.get('/allBlogs', passport.authenticate('jwt', { session: false }), (req, res) => {
    const blogs = index_1.getAllBlogs(res);
    return blogs;
});
/* ===============================================================
     GET BLOG BY USER ID
  =============================================================== */
router.get('/singleBlog/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const blog = index_1.getBlogByID(req.params.id, req, res);
    return blog;
});
/* ===============================================================
     GET ALL BLOG FOR USER AUTHENTICATED
  =============================================================== */
router.get('/blogs/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const blogs = index_1.getBlogsForSpecificUser(req.params.id, res);
    return blogs;
});
/* ===============================================================
     UPDATE BLOG
  =============================================================== */
router.put('/updateBlog', passport.authenticate('jwt', { session: false }), (req, res) => {
    const result = index_1.updateBlog(req.body, req, res);
    return result;
});
/* ===============================================================
     DELETE BLOG
  =============================================================== */
router.delete('/deleteBlog/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const result = index_1.deleteBlog(req, res);
    return result;
});
/* ===============================================================
     LIKE BLOG
  =============================================================== */
router.put('/like', passport.authenticate('jwt', { session: false }), (req, res) => {
    const result = index_1.LikeABlog(req, res);
    return result;
});
/* ===============================================================
     DISLIKE BLOG
  =============================================================== */
router.put('/dislike', passport.authenticate('jwt', { session: false }), (req, res) => {
    const result = index_1.dislikeBlog(req, res);
    return result;
});
/* ===============================================================
     COMMENT ON BLOG POST
  =============================================================== */
router.post('/comment', passport.authenticate('jwt', { session: false }), (req, res) => {
    const result = index_1.commentBlog(req, res);
    return result;
});
exports.default = router;


/***/ }),

/***/ "./apps/backend/src/app/routes/users/user-models.ts":
/*!**********************************************************!*\
  !*** ./apps/backend/src/app/routes/users/user-models.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const { isEmail } = __webpack_require__(/*! validator */ "validator");
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 6,
    },
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true,
    },
    avatar: {
        type: String,
        default: './uploads/profil/random-user.png',
    },
    phoneNumber: {
        type: Number,
        required: true,
        minLength: 8,
        maxLength: 35,
        unique: false,
    },
}, {
    timestamps: true,
});
exports.userModel = mongoose.model('user', userSchema);


/***/ }),

/***/ "./apps/backend/src/app/routes/users/user-routes.ts":
/*!**********************************************************!*\
  !*** ./apps/backend/src/app/routes/users/user-routes.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(/*! express */ "express");
const passport = __webpack_require__(/*! passport */ "passport");
const index_1 = __webpack_require__(/*! ../../../../../../libs/database-logics/src/index */ "./libs/database-logics/src/index.ts");
const index_2 = __webpack_require__(/*! ../../helpers/index */ "./apps/backend/src/app/helpers/index.ts");
const router = express.Router();
// Routes
router.post('/register', index_2.userFieldsValidator, index_2.validateMiddleware(index_2.isUserValidator), (req, res) => {
    const userDetails = req.body;
    const user = index_1.createUser(userDetails, res, req);
    return user;
});
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    const user = index_1.getProfile(req, res);
    return user;
});
router.get('/getAllUsers', passport.authenticate('jwt', { session: false }), (req, res) => {
    const users = index_1.getAllUsers(res);
    return users;
});
router.post('/deleteAccount', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { username, email } = req.body;
    const response = index_1.deleteAccount(username, email, req, res);
    return response;
});
/* ============================================================
     Route to check if user's email is available for registration
  ============================================================ */
router.get('/checkEmail/:email', (req, res) => {
    const user = index_1.checkEmail(req.params.email, res);
    return user;
});
/* ===============================================================
     Route to check if user's username is available for registration
  =============================================================== */
router.get('/checkUsername/:username', (req, res) => {
    const user = index_1.checkUsername(req.params.username, res);
    return user;
});
router.post('/updateProfile/:id', passport.authenticate('jwt', { session: false }), index_2.userFieldsValidator, index_2.validateMiddleware(index_2.isUserValidator), (req, res) => {
    const userDetails = req.body;
    const userUpdated = index_1.updateUserProfile(userDetails, res, req, req.params.id);
    return userUpdated;
});
exports.default = router;


/***/ }),

/***/ "./apps/backend/src/main.ts":
/*!**********************************!*\
  !*** ./apps/backend/src/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(/*! path */ "path");
const express = __webpack_require__(/*! express */ "express");
const logger = __webpack_require__(/*! morgan */ "morgan");
const passport = __webpack_require__(/*! passport */ "passport");
const cors = __webpack_require__(/*! cors */ "cors");
const user_routes_1 = __webpack_require__(/*! ./app/routes/users/user-routes */ "./apps/backend/src/app/routes/users/user-routes.ts");
const auth_1 = __webpack_require__(/*! ./app/routes/auth/auth */ "./apps/backend/src/app/routes/auth/auth.ts");
const blog_routes_1 = __webpack_require__(/*! ./app/routes/blogs/blog-routes */ "./apps/backend/src/app/routes/blogs/blog-routes.ts");
const CLIENT_BUILD_PATH = path.join(__dirname, '../frontend');
const app = express();
app.use(express.static(CLIENT_BUILD_PATH));
__webpack_require__(/*! dotenv */ "dotenv").config();
__webpack_require__(/*! ../src/app/helpers/dbConnexion */ "./apps/backend/src/app/helpers/dbConnexion.ts");
const corsOption = {
    origin: '*',
    'Access-Control-Allow-Origin': '*',
    credentials: true,
};
app.use(cors(corsOption));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
__webpack_require__(/*! ../../backend/src/app/helpers/passport */ "./apps/backend/src/app/helpers/passport.ts")(passport);
app.use(passport.initialize());
app.use(auth_1.default);
app.use('/users', user_routes_1.default);
app.use('/blog', blog_routes_1.default);
app.get('*', (request, response) => {
    response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
server.on('error', console.error);


/***/ }),

/***/ "./libs/database-logics/src/index.ts":
/*!*******************************************!*\
  !*** ./libs/database-logics/src/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/database-logics */ "./libs/database-logics/src/lib/database-logics.ts"), exports);


/***/ }),

/***/ "./libs/database-logics/src/lib/database-logics.ts":
/*!*********************************************************!*\
  !*** ./libs/database-logics/src/lib/database-logics.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.commentBlog = exports.dislikeBlog = exports.LikeABlog = exports.deleteBlog = exports.updateBlog = exports.createNewBlog = exports.getBlogsForSpecificUser = exports.getBlogByID = exports.getAllBlogs = exports.getAllUsers = exports.deleteAccount = exports.getProfile = exports.updateUserProfile = exports.createUser = exports.checkEmail = exports.checkUsername = exports.authenticateUser = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const BlogShema = __webpack_require__(/*! apps/backend/src/app/routes/blogs/blog-models */ "./apps/backend/src/app/routes/blogs/blog-models.ts");
const user_models_1 = __webpack_require__(/*! apps/backend/src/app/routes/users/user-models */ "./apps/backend/src/app/routes/users/user-models.ts");
const authenticateUser = (username, password, done) => {
    user_models_1.userModel
        .findOne({ username })
        .then((user) => {
        bcrypt.compare(password, user === null || user === void 0 ? void 0 : user.password, (err, isMatch) => {
            if (err)
                throw err;
            if (isMatch) {
                return done(null, user, { success: true, message: 'login successfully', user });
            }
            else {
                return done(null, false, { success: false, message: 'Wrong password' });
            }
        });
    })
        .catch(err => {
        return done(null, false, { message: err });
    });
};
exports.authenticateUser = authenticateUser;
const checkUsername = (username, res) => {
    if (!username) {
        res.json({ success: false, message: 'Username was not provided' }); // Return error
    }
    else {
        user_models_1.userModel.findOne({ username }, (err, user) => {
            if (err) {
                res.json({ success: false, message: err });
            }
            else {
                if (user) {
                    res.json({ success: false, message: 'Username is already taken' });
                }
                else {
                    res.json({ success: true, message: 'Username is available' });
                }
            }
        });
    }
};
exports.checkUsername = checkUsername;
const checkEmail = (email, res) => {
    if (!email) {
        res.json({ success: false, message: 'Email was not provided' }); // Return error
    }
    else {
        user_models_1.userModel.findOne({ email }, (err, user) => {
            if (err) {
                res.json({ success: false, message: err });
            }
            else {
                if (user) {
                    res.json({ success: false, message: 'Email is already taken' }); // Return as taken username
                }
                else {
                    res.json({ success: true, message: 'Email is available' }); // Return as vailable username
                }
            }
        });
    }
};
exports.checkEmail = checkEmail;
const createUser = (userDetails, res, req) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const password = bcrypt.hashSync(userDetails.password, 10);
    const user = {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        username: userDetails.username,
        password,
        email: userDetails.email,
        phoneNumber: userDetails.phoneNumber,
        createdAt: new Date(),
        modifiedAt: new Date(),
    };
    return saveUser(user, res, 'addNew', req);
});
exports.createUser = createUser;
const updateUserProfile = (userDetails, res, userAuthenticated, userID) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const password = bcrypt.hashSync(userDetails.password, 10);
    const user = {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        username: userDetails.username,
        password,
        email: userDetails.email,
        phoneNumber: userDetails.phoneNumber,
        modifiedAt: new Date(),
    };
    return saveUser(user, res, 'update', userAuthenticated, userID);
});
exports.updateUserProfile = updateUserProfile;
const saveUser = ({ username, password, email, firstName, lastName, phoneNumber, modifiedAt }, res, queryType, req, userID) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (queryType === 'addNew') {
            const userRegistered = yield user_models_1.userModel.create({
                username,
                email,
                password,
                firstName,
                lastName,
                phoneNumber,
            });
            res.status(201).json({ success: true, message: 'user created successfully', userId: userRegistered._id });
        }
        else {
            user_models_1.userModel.findOne({ _id: userID }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: 'Error fonded' + err });
                }
                else {
                    if (!user) {
                        res.json({ success: false, message: 'Unable to authenticate user.' });
                    }
                    else {
                        if (parseInt(user._id) !== parseInt(req.user._id)) {
                            res.json({ success: false, message: 'You are not authorized to edit this user' });
                        }
                        else {
                            user.lastName = lastName;
                            user.firstName = firstName;
                            user.email = email;
                            user.phoneNumber = phoneNumber;
                            user.username = username;
                            user.password = password;
                            user.modifiedAt = modifiedAt;
                            user.save(err => {
                                if (err) {
                                    if (err.errors) {
                                        res.json({ success: false, message: 'Please ensure form is filled out properly' });
                                    }
                                    else {
                                        res.json({ success: false, message: 'Error fonded' + err });
                                    }
                                }
                                else {
                                    res.json({ success: true, message: 'User Updated!' });
                                }
                            });
                        }
                    }
                }
            });
        }
    }
    catch (error) {
        res.status(400).send({ error });
    }
});
// PROFILE
const getProfile = (req, res) => {
    user_models_1.userModel.findOne({ _id: req.user._id }).exec((err, user) => {
        if (err) {
            res.json({ success: false, message: err });
        }
        else {
            if (!user) {
                res.json({ success: false, message: 'User not found' });
            }
            else {
                res.json({ success: true, user: user });
            }
        }
    });
};
exports.getProfile = getProfile;
const deleteAccount = (username, email, req, res) => {
    user_models_1.userModel.findOneAndRemove({ username, email }).exec((err, response) => {
        if (err) {
            res.json({ success: false, message: err });
        }
        else {
            if (!response) {
                res.json({ success: false, message: "You can't delete this account" });
            }
            else {
                res.clearCookie('connect.sid');
                req.logout();
                res.json({ success: true, message: 'Account deleted succesfully', response });
            }
        }
    });
};
exports.deleteAccount = deleteAccount;
const getAllUsers = (res) => {
    return user_models_1.userModel
        .find({}, (err, users) => {
        if (err) {
            return res.json({ success: false, message: err });
        }
        else {
            if (!users) {
                return res.json({ success: false, message: 'No users found.' });
            }
            else {
                return res.json({ success: true, users });
            }
        }
    })
        .sort({ _id: -1 });
};
exports.getAllUsers = getAllUsers;
// ALL QUERIES RELATIVES TO BLOGGGG
const getAllBlogs = (res) => {
    return BlogShema.find({}, (err, blogs) => {
        if (err) {
            return res.json({ success: false, message: err });
        }
        else {
            if (!blogs) {
                return res.json({ success: false, message: 'No blogs found.' });
            }
            else {
                return res.json({ success: true, blogs: blogs });
            }
        }
    }).sort({ _id: -1 });
};
exports.getAllBlogs = getAllBlogs;
const getBlogByID = (id, req, res) => {
    if (!id) {
        res.json({ success: false, message: 'No blog ID was provided.' });
    }
    else {
        BlogShema.findOne({ _id: id }, (err, blog) => {
            if (err) {
                res.json({ success: false, message: 'Not a valid blog id' });
            }
            else {
                if (!blog) {
                    res.json({ success: false, message: 'Blog not found.' });
                }
                else {
                    user_models_1.userModel.findOne({ _id: req.user._id }, (err, user) => {
                        if (err) {
                            res.json({ success: false, message: err });
                        }
                        else {
                            if (!user) {
                                res.json({ success: false, message: 'Unable to authenticate user' }); // Return error message
                            }
                            else {
                                if (parseInt(user._id) !== parseInt(blog.createdBy)) {
                                    res.json({
                                        success: false,
                                        message: 'You are not authorized to edit this blog.',
                                        createdBy: blog.createdBy,
                                        userID: user._id,
                                    });
                                }
                                else {
                                    res.json({ success: true, blog });
                                }
                            }
                        }
                    });
                }
            }
        });
    }
};
exports.getBlogByID = getBlogByID;
const getBlogsForSpecificUser = (userID, res) => {
    if (!userID) {
        return res.json({ success: false, message: 'No user ID was provided.' });
    }
    else {
        BlogShema.find({ createdBy: userID }, (err, blog) => {
            if (err) {
                return res.json({ success: false, message: 'Not a valid user id' }); // Return error message
            }
            else {
                if (!blog || blog.length === 0) {
                    return res.json({ success: false, message: 'Blog not found.' }); // Return error message
                }
                else {
                    return res.json({ success: true, blogs: blog });
                }
            }
        });
    }
};
exports.getBlogsForSpecificUser = getBlogsForSpecificUser;
const createNewBlog = (blogParam, res) => {
    const blog = {
        title: blogParam.title,
        body: blogParam.body,
        createdBy: blogParam.createdBy,
        createdAt: new Date(),
        modifiedAt: new Date(),
        likes: 0,
        likedBy: [],
        dislikes: 0,
        dislikedBy: [],
        comments: [],
    };
    const blogCreation = new BlogShema(blog);
    blogCreation.save(err => {
        if (err) {
            if (err.errors) {
                if (err.errors.title) {
                    return res.json({ success: false, message: err.errors.title.message });
                }
                else {
                    if (err.errors.body) {
                        return res.json({ success: false, message: err.errors.body.message });
                    }
                    else {
                        return res.json({ success: false, message: err });
                    }
                }
            }
            else {
                res.json({ success: false, message: err });
            }
        }
        else {
            res.json({ success: true, message: 'Blog saved!' });
        }
    });
    return blogCreation;
};
exports.createNewBlog = createNewBlog;
const updateBlog = (blogParam, req, res) => {
    if (!blogParam._id) {
        res.json({ success: false, message: 'No blog id provided' });
    }
    else {
        BlogShema.findOne({ _id: blogParam._id }, (err, blog) => {
            if (err) {
                res.json({ success: false, message: 'Not a valid blog id' });
            }
            else {
                if (!blog) {
                    res.json({ success: false, message: 'Blog id was not found.' });
                }
                else {
                    user_models_1.userModel.findOne({ _id: req.user._id }, (err, user) => {
                        if (err) {
                            res.json({ success: false, message: err });
                        }
                        else {
                            if (!user) {
                                res.json({ success: false, message: 'Unable to authenticate user.' });
                            }
                            else {
                                if (parseInt(user._id) !== parseInt(blog.createdBy)) {
                                    res.json({ success: false, message: 'You are not authorized to edit this blog post.' });
                                }
                                else {
                                    blog.title = blogParam.title;
                                    blog.body = blogParam.body;
                                    blog.save(err => {
                                        if (err) {
                                            if (err.errors) {
                                                res.json({ success: false, message: 'Please ensure form is filled out properly' });
                                            }
                                            else {
                                                res.json({ success: false, message: err });
                                            }
                                        }
                                        else {
                                            res.json({ success: true, message: 'Blog Updated!' });
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            }
        });
    }
};
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => {
    if (!req.params.id) {
        res.json({ success: false, message: 'No id provided' });
    }
    else {
        BlogShema.findOne({ _id: req.params.id }, (err, blog) => {
            if (err) {
                res.json({ success: false, message: 'Invalid id' });
            }
            else {
                if (!blog) {
                    res.json({ success: false, messasge: 'Blog was not found' });
                }
                else {
                    user_models_1.userModel.findOne({ _id: req.user._id }, (err, user) => {
                        if (err) {
                            res.json({ success: false, message: err });
                        }
                        else {
                            if (!user) {
                                res.json({ success: false, message: 'Unable to authenticate user.' });
                            }
                            else {
                                if (parseInt(user._id) !== parseInt(blog.createdBy)) {
                                    res.json({ success: false, message: 'You are not authorized to delete this blog post' });
                                }
                                else {
                                    blog.remove(err => {
                                        if (err) {
                                            res.json({ success: false, message: err });
                                        }
                                        else {
                                            res.json({ success: true, message: 'Blog deleted!' });
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            }
        });
    }
};
exports.deleteBlog = deleteBlog;
const LikeABlog = (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.id)) {
        res.json({ success: false, message: 'No id was provided.' });
    }
    else {
        BlogShema.findOne({ _id: req.body.id }, (err, blog) => {
            if (err) {
                res.json({ success: false, message: 'Invalid blog id' });
            }
            else {
                if (!blog) {
                    res.json({ success: false, message: 'That blog was not found.' });
                }
                else {
                    user_models_1.userModel.findOne({ _id: req.user._id }, (err, user) => {
                        if (err) {
                            res.json({ success: false, message: 'Something went wrong.' });
                        }
                        else {
                            if (!user) {
                                res.json({ success: false, message: 'Could not authenticate user.' });
                            }
                            else {
                                if (parseInt(user._id) === parseInt(blog.createdBy)) {
                                    res.json({ success: false, message: 'Cannot like your own post.' });
                                }
                                else {
                                    if (blog.likedBy.includes(user.username)) {
                                        res.json({ success: false, message: 'You already liked this post.' });
                                    }
                                    else {
                                        if (blog.dislikedBy.includes(user.username)) {
                                            blog.dislikes--;
                                            const arrayIndex = blog.dislikedBy.indexOf(user.username);
                                            blog.dislikedBy.splice(arrayIndex, 1);
                                            blog.likes++;
                                            blog.likedBy.push(user.username);
                                            blog.save(err => {
                                                if (err) {
                                                    res.json({ success: false, message: 'Something went wrong.' });
                                                }
                                                else {
                                                    res.json({ success: true, message: 'Blog liked!' });
                                                }
                                            });
                                        }
                                        else {
                                            blog.likes++;
                                            blog.likedBy.push(user.username);
                                            blog.save(err => {
                                                if (err) {
                                                    res.json({ success: false, message: 'Something went wrong.' });
                                                }
                                                else {
                                                    res.json({ success: true, message: 'Blog liked!' });
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
    }
};
exports.LikeABlog = LikeABlog;
const dislikeBlog = (req, res) => {
    if (!req.body.id) {
        res.json({ success: false, message: 'No id was provided.' });
    }
    else {
        BlogShema.findOne({ _id: req.body.id }, (err, blog) => {
            if (err) {
                res.json({ success: false, message: 'Invalid blog id' });
            }
            else {
                if (!blog) {
                    res.json({ success: false, message: 'That blog was not found.' });
                }
                else {
                    user_models_1.userModel.findOne({ _id: req.user._id }, (err, user) => {
                        if (err) {
                            res.json({ success: false, message: 'Something went wrong.' });
                        }
                        else {
                            if (!user) {
                                res.json({ success: false, message: 'Could not authenticate user.' });
                            }
                            else {
                                if (parseInt(user._id) === parseInt(blog.createdBy)) {
                                    res.json({ success: false, message: 'Cannot dislike your own post.' });
                                }
                                else {
                                    if (blog.dislikedBy.includes(user.username)) {
                                        res.json({ success: false, message: 'You already disliked this post.' });
                                    }
                                    else {
                                        if (blog.likedBy.includes(user.username)) {
                                            blog.likes--;
                                            const arrayIndex = blog.likedBy.indexOf(user.username);
                                            blog.likedBy.splice(arrayIndex, 1);
                                            blog.dislikes++;
                                            blog.dislikedBy.push(user.username);
                                            blog.save(err => {
                                                if (err) {
                                                    res.json({ success: false, message: 'Something went wrong.' });
                                                }
                                                else {
                                                    res.json({ success: true, message: 'Blog disliked!' });
                                                }
                                            });
                                        }
                                        else {
                                            blog.dislikes++;
                                            blog.dislikedBy.push(user.username);
                                            blog.save(err => {
                                                if (err) {
                                                    res.json({ success: false, message: 'Something went wrong.' });
                                                }
                                                else {
                                                    res.json({ success: true, message: 'Blog disliked!' });
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
    }
};
exports.dislikeBlog = dislikeBlog;
const commentBlog = (req, res) => {
    if (!req.body.comment) {
        res.json({ success: false, message: 'No comment provided' });
    }
    else {
        if (!req.body.id) {
            res.json({ success: false, message: 'No id was provided' });
        }
        else {
            BlogShema.findOne({ _id: req.body.id }, (err, blog) => {
                if (err) {
                    res.json({ success: false, message: 'Invalid blog id' });
                }
                else {
                    if (!blog) {
                        res.json({ success: false, message: 'Blog not found.' });
                    }
                    else {
                        user_models_1.userModel.findOne({ _id: req.user._id }, (err, user) => {
                            if (err) {
                                res.json({ success: false, message: 'Something went wrong' });
                            }
                            else {
                                if (!user) {
                                    res.json({ success: false, message: 'User not found.' });
                                }
                                else {
                                    blog.comments.push({
                                        comment: req.body.comment,
                                        commentator: user.username,
                                    });
                                    blog.save(err => {
                                        if (err) {
                                            res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                                        }
                                        else {
                                            res.json({ success: true, message: 'Comment saved' }); // Return success message
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            });
        }
    }
};
exports.commentBlog = commentBlog;


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./apps/backend/src/main.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aklade/Documents/PROJECTS/BOTMIND/botmind-app/apps/backend/src/main.ts */"./apps/backend/src/main.ts");


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash/fp":
/*!****************************!*\
  !*** external "lodash/fp" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/fp");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map