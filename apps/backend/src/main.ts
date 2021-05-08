import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as passport from 'passport';
import * as cors from 'cors';
import userRoutes from './app/routes/users/user-routes';
import auth from './app/routes/auth/auth';
import blogRoutes from './app/routes/blogs/blog-routes';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../../dist/apps/frontend');
const app = express();

const apiRoute = '/api';

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

app.get(apiRoute, (req, res) => {
  res.send({ message: 'THIS APPS WORK WELL' });
});

app.use(apiRoute, auth);
app.use(apiRoute, userRoutes);
app.use(apiRoute, blogRoutes);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../../dist/apps/frontend', 'index.html'));
});

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}${apiRoute}`);
});
server.on('error', console.error);
