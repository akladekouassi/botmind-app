import * as express from 'express';
import * as logger from 'morgan';
import * as passport from 'passport';
import * as cors from 'cors';
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

require('../../backend/src/app/helpers/passport')(passport);

app.use(passport.initialize());

app.use(auth);
app.use('/users', userRoutes);
app.use('/blog', blogRoutes);

const server = app.listen(environment.PORT, () => {
  console.log(`Listening at ${environment.PORT}`);
});
server.on('error', console.error);
