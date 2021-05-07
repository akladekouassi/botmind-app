const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const userSchema: any = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model('user', userSchema);
