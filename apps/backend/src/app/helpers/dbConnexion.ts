import mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER_PASS}@${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}?authSource=${process.env.MONGODB_AUTH_SOURCE}&authMechanism=${process.env.MONGODB_AUTH_MECHANISME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('MONGODB connected successfully'))
  .catch(err => console.log('Error occured when connecting to the DB:', err));
