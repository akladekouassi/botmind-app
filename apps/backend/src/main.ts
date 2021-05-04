import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as passport from 'passport';
import * as session from 'express-session';
import * as cors from 'cors';
import paginate from 'express-paginate';
import userRoutes from './app/routes/users/user-routes';
import auth from './app/routes/auth/auth';
import blogRoutes from './app/routes/blogs/blog-routes';
import { environment } from '../src/environments/environment';

const app = express();

require('dotenv').config();
require('../src/app/helpers/dbConnexion');

const corsOption = {
  origin: '*',
  'Access-Control-Allow-Origin': '*',
  credentials: true,
};

app.use(cors(corsOption));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: 'session secret',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(auth);
app.use('/users', userRoutes);
app.use('/blog', blogRoutes);

const server = app.listen(environment.PORT, () => {
  console.log(`Listening at ${environment.PORT}`);
});
server.on('error', console.error);
