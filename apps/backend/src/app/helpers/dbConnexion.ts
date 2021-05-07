import mongoose = require('mongoose');

mongoose
  .connect(`mongodb+srv://Akladekouassi:Akladekouassi@cluster0.8stux.mongodb.net/Botmind?authMechanism=SCRAM-SHA-1`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MONGODB connected successfully'))
  .catch(err => console.log('Error occured when connecting to the DB:', err));
