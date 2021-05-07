import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as passport from 'passport';
import * as cors from 'cors';
import userRoutes from './app/routes/users/user-routes';
import auth from './app/routes/auth/auth';
import blogRoutes from './app/routes/blogs/blog-routes';
// import {  } from "../../frontend/";
// import {  } from "../../../dist/apps/frontend";

const CLIENT_BUILD_PATH = path.join(__dirname, '../../../dist/apps/frontend');
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

app.use(express.static(CLIENT_BUILD_PATH));

app.get('/api', (req, res) => {
  res.send({ message: 'THIS APPS WORK WELL' });
});

app.use(auth);
app.use('/users', userRoutes);
app.use('/blog', blogRoutes);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../../dist/apps/frontend', 'index.html'));
});

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
server.on('error', console.error);
