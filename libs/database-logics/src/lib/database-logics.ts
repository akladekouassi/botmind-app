import * as path from 'path';
import * as bcrypt from 'bcryptjs';
import { v4 } from 'uuid';
import { remove } from 'lodash/fp';
import * as shortid from 'shortid';
import { isWithinInterval } from 'date-fns';
import * as mongoose from 'mongoose';
const jwt = require('jsonwebtoken');
const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)
const BlogShema = require('../../../../apps/backend/src/app/routes/blogs/blog-models');
const { Schema, model } = mongoose;
const { isEmail } = require('validator');
import { User, DbSchema } from '../../../data-models/index';

// USERS LOGICS
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

export const userModel = model('user', userSchema);
export const authenticateUser = (username: string, password: string, done: Function) => {
  userModel
    .findOne({ username })
    .then((user: any) => {
      bcrypt.compare(password, user?.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, user, { success: true, message: 'login successfully', user });
        } else {
          return done(null, false, { success: false, message: 'Wrong password' });
        }
      });
    })
    .catch(err => {
      return done(null, false, { message: err });
    });
};

export const getUSerProfile = (req: any, res: any) => {
  userModel.findOne({ _id: req.decoded.userId }).exec((err, user) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      if (!user) {
        res.json({ success: false, message: 'User not found' });
      } else {
        res.json({ success: true, user: user });
      }
    }
  });
};

export const checkUsername = (username: string, res: any) => {
  if (!username) {
    res.json({ success: false, message: 'Username was not provided' }); // Return error
  } else {
    userModel.findOne({ username }, (err, user) => {
      if (err) {
        res.json({ success: false, message: err }); // Return connection error
      } else {
        if (user) {
          res.json({ success: false, message: 'Username is already taken' }); // Return as taken username
        } else {
          res.json({ success: true, message: 'Username is available' }); // Return as vailable username
        }
      }
    });
  }
};

export const checkEmail = (email: string, res: any) => {
  if (!email) {
    res.json({ success: false, message: 'Email was not provided' }); // Return error
  } else {
    userModel.findOne({ email }, (err, user) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (user) {
          res.json({ success: false, message: 'Email is already taken' }); // Return as taken username
        } else {
          res.json({ success: true, message: 'Email is available' }); // Return as vailable username
        }
      }
    });
  }
};

export const createUser = async (userDetails: Partial<User>, res: any, req: any): Promise<any> => {
  const password = bcrypt.hashSync(userDetails.password!, 10);
  const user: Partial<User> = {
    firstName: userDetails.firstName!,
    lastName: userDetails.lastName!,
    username: userDetails.username!,
    password,
    email: userDetails.email!,
    phoneNumber: userDetails.phoneNumber!,
    createdAt: new Date(),
    modifiedAt: new Date(),
  };

  return saveUser(user, res, 'addNew', req);
};

export const updateUserProfile = async (
  userDetails: Partial<User>,
  res: any,
  userAuthenticated: any,
  userID: string
): Promise<any> => {
  const password = bcrypt.hashSync(userDetails.password!, 10);
  const user: Partial<User> = {
    firstName: userDetails.firstName!,
    lastName: userDetails.lastName!,
    username: userDetails.username!,
    password,
    email: userDetails.email!,
    phoneNumber: userDetails.phoneNumber!,
    modifiedAt: new Date(),
  };

  return saveUser(user, res, 'update', userAuthenticated, userID);
};

const saveUser = async (
  { username, password, email, firstName, lastName, phoneNumber, modifiedAt }: Partial<User>,
  res: any,
  queryType: 'addNew' | 'update',
  req: any,
  userID?: string
) => {
  try {
    if (queryType === 'addNew') {
      const userRegistered = await userModel.create({
        username,
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      });
      res.status(201).json({ success: true, message: 'user created successfully', userId: userRegistered._id });
    } else {
      userModel.findOne({ _id: userID! }, (err, user) => {
        if (err) {
          res.json({ success: false, message: 'Error fonded' + err });
        } else {
          if (!user) {
            res.json({ success: false, message: 'Unable to authenticate user.' });
          } else {
            if (parseInt(user._id) !== parseInt(req.user._id)) {
              res.json({ success: false, message: 'You are not authorized to edit this user' });
            } else {
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
                  } else {
                    res.json({ success: false, message: 'Error fonded' + err });
                  }
                } else {
                  res.json({ success: true, message: 'User Updated!' });
                }
              });
            }
          }
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const getProfile = (req: any, res: any) => {
  userModel.findOne({ _id: req.user._id }).exec((err, user) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      if (!user) {
        res.json({ success: false, message: 'User not found' });
      } else {
        res.json({ success: true, user: user });
      }
    }
  });
};

// ALL QUERIES RELATIVES TO BLOGGGG
export const getAllBlogs = (res: any) => {
  return BlogShema.find({}, (err, blogs) => {
    console.log('ALL BLOG', blogs);
    // Check if error was found or not
    if (err) {
      return res.json({ success: false, message: err }); // Return error message
    } else {
      // Check if blogs were found in database
      if (!blogs) {
        return res.json({ success: false, message: 'No blogs found.' }); // Return error of no blogs found
      } else {
        return res.json({ success: true, blogs: blogs }); // Return success and blogs array
      }
    }
  }).sort({ _id: -1 });
};

export const getBlogByID = (id: string, req: any, res: any) => {
  if (!id) {
    res.json({ success: false, message: 'No blog ID was provided.' });
  } else {
    BlogShema.findOne({ _id: id }, (err, blog) => {
      if (err) {
        res.json({ success: false, message: 'Not a valid blog id' });
      } else {
        if (!blog) {
          res.json({ success: false, message: 'Blog not found.' });
        } else {
          userModel.findOne({ _id: req.user._id }, (err, user) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              if (!user) {
                res.json({ success: false, message: 'Unable to authenticate user' }); // Return error message
              } else {
                if (parseInt(user._id) !== parseInt(blog.createdBy)) {
                  res.json({
                    success: false,
                    message: 'You are not authorized to edit this blog.',
                    createdBy: blog.createdBy,
                    userID: user._id,
                  });
                } else {
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

export const getBlogsForSpecificUser = (userID: string, res: any) => {
  if (!userID) {
    return res.json({ success: false, message: 'No user ID was provided.' });
  } else {
    BlogShema.find({ createdBy: userID }, (err, blog) => {
      if (err) {
        return res.json({ success: false, message: 'Not a valid user id' }); // Return error message
      } else {
        if (!blog || blog.length === 0) {
          return res.json({ success: false, message: 'Blog not found.' }); // Return error message
        } else {
          return res.json({ success: true, blog });
        }
      }
    });
  }
};

export const createNewBlog = (blogParam: any, res: any) => {
  const blog: any = {
    title: blogParam.title,
    body: blogParam.body,
    createdBy: blogParam.createdBy,
    createdAt: new Date(),
    modifiedAt: new Date(),
    likes: 0,
    likedBy: [],
    dislikes: 0,
    dislikedBy: [],
    comments: [
      {
        comment: 'No comment added yet',
        commentator: '',
      },
    ],
  };

  const blogCreation = new BlogShema(blog);

  blogCreation.save(err => {
    if (err) {
      if (err.errors) {
        if (err.errors.title) {
          return res.json({ success: false, message: err.errors.title.message });
        } else {
          if (err.errors.body) {
            return res.json({ success: false, message: err.errors.body.message });
          } else {
            return res.json({ success: false, message: err });
          }
        }
      } else {
        res.json({ success: false, message: err });
      }
    } else {
      res.json({ success: true, message: 'Blog saved!' });
    }
  });

  return blogCreation;
};

export const updateBlog = (blogParam: any, req: any, res: any) => {
  if (!blogParam._id) {
    res.json({ success: false, message: 'No blog id provided' });
  } else {
    BlogShema.findOne({ _id: blogParam._id }, (err, blog) => {
      if (err) {
        res.json({ success: false, message: 'Not a valid blog id' });
      } else {
        if (!blog) {
          res.json({ success: false, message: 'Blog id was not found.' });
        } else {
          userModel.findOne({ _id: req.user._id }, (err, user) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              if (!user) {
                res.json({ success: false, message: 'Unable to authenticate user.' });
              } else {
                if (parseInt(user._id) !== parseInt(blog.createdBy)) {
                  res.json({ success: false, message: 'You are not authorized to edit this blog post.' });
                } else {
                  blog.title = blogParam.title;
                  blog.body = blogParam.body;
                  blog.save(err => {
                    if (err) {
                      if (err.errors) {
                        res.json({ success: false, message: 'Please ensure form is filled out properly' });
                      } else {
                        res.json({ success: false, message: err });
                      }
                    } else {
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

export const deleteBlog = (req: any, res: any) => {
  if (!req.params.id) {
    res.json({ success: false, message: 'No id provided' });
  } else {
    BlogShema.findOne({ _id: req.params.id }, (err, blog) => {
      if (err) {
        res.json({ success: false, message: 'Invalid id' });
      } else {
        if (!blog) {
          res.json({ success: false, messasge: 'Blog was not found' });
        } else {
          userModel.findOne({ _id: req.user._id }, (err, user) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              if (!user) {
                res.json({ success: false, message: 'Unable to authenticate user.' });
              } else {
                if (parseInt(user._id) !== parseInt(blog.createdBy)) {
                  res.json({ success: false, message: 'You are not authorized to delete this blog post' });
                } else {
                  blog.remove(err => {
                    if (err) {
                      res.json({ success: false, message: err });
                    } else {
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

export const LikeABlog = (req: any, res: any) => {
  if (!req.body?.id!) {
    res.json({ success: false, message: 'No id was provided.' }); // Return error message
  } else {
    // Search the database with id
    BlogShema.findOne({ _id: req.body.id }, (err, blog) => {
      // Check if error was encountered
      if (err) {
        res.json({ success: false, message: 'Invalid blog id' }); // Return error message
      } else {
        // Check if id matched the id of a blog post in the database
        if (!blog) {
          res.json({ success: false, message: 'That blog was not found.' }); // Return error message
        } else {
          // Get data from user that is signed in
          userModel.findOne({ _id: req.user._id }, (err, user) => {
            // Check if error was found
            if (err) {
              res.json({ success: false, message: 'Something went wrong.' }); // Return error message
            } else {
              // Check if id of user in session was found in the database
              if (!user) {
                res.json({ success: false, message: 'Could not authenticate user.' }); // Return error message
              } else {
                // Check if user who liked post is the same user that originally created the blog post
                if (parseInt(user._id) === parseInt(blog.createdBy)) {
                  res.json({ success: false, messagse: 'Cannot like your own post.' }); // Return error message
                } else {
                  // Check if the user who liked the post has already liked the blog post before
                  if (blog.likedBy.includes(user.username)) {
                    res.json({ success: false, message: 'You already liked this post.' }); // Return error message
                  } else {
                    // Check if user who liked post has previously disliked a post
                    if (blog.dislikedBy.includes(user.username)) {
                      blog.dislikes--; // Reduce the total number of dislikes
                      const arrayIndex = blog.dislikedBy.indexOf(user.username); // Get the index of the username in the array for removal
                      blog.dislikedBy.splice(arrayIndex, 1); // Remove user from array
                      blog.likes++; // Increment likes
                      blog.likedBy.push(user.username); // Add username to the array of likedBy array
                      // Save blog post data
                      blog.save(err => {
                        // Check if error was found
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                        } else {
                          res.json({ success: true, message: 'Blog liked!' }); // Return success message
                        }
                      });
                    } else {
                      blog.likes++; // Incriment likes
                      blog.likedBy.push(user.username); // Add liker's username into array of likedBy
                      // Save blog post
                      blog.save(err => {
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                        } else {
                          res.json({ success: true, message: 'Blog liked!' }); // Return success message
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

export const dislikeBlog = (req: any, res: any) => {
  if (!req.body.id) {
    res.json({ success: false, message: 'No id was provided.' }); // Return error message
  } else {
    // Search database for blog post using the id
    BlogShema.findOne({ _id: req.body.id }, (err, blog) => {
      // Check if error was found
      if (err) {
        res.json({ success: false, message: 'Invalid blog id' }); // Return error message
      } else {
        // Check if blog post with the id was found in the database
        if (!blog) {
          res.json({ success: false, message: 'That blog was not found.' }); // Return error message
        } else {
          // Get data of user who is logged in
          userModel.findOne({ _id: req.user._id }, (err, user) => {
            // Check if error was found
            if (err) {
              res.json({ success: false, message: 'Something went wrong.' }); // Return error message
            } else {
              // Check if user was found in the database
              if (!user) {
                res.json({ success: false, message: 'Could not authenticate user.' }); // Return error message
              } else {
                // Check if user who disliekd post is the same person who originated the blog post
                if (parseInt(user._id) === parseInt(blog.createdBy)) {
                  res.json({ success: false, messagse: 'Cannot dislike your own post.' }); // Return error message
                } else {
                  // Check if user who disliked post has already disliked it before
                  if (blog.dislikedBy.includes(user.username)) {
                    res.json({ success: false, message: 'You already disliked this post.' }); // Return error message
                  } else {
                    // Check if user has previous disliked this post
                    if (blog.likedBy.includes(user.username)) {
                      blog.likes--; // Decrease likes by one
                      const arrayIndex = blog.likedBy.indexOf(user.username); // Check where username is inside of the array
                      blog.likedBy.splice(arrayIndex, 1); // Remove username from index
                      blog.dislikes++; // Increase dislikeds by one
                      blog.dislikedBy.push(user.username); // Add username to list of dislikers
                      // Save blog data
                      blog.save(err => {
                        // Check if error was found
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                        } else {
                          res.json({ success: true, message: 'Blog disliked!' }); // Return success message
                        }
                      });
                    } else {
                      blog.dislikes++; // Increase likes by one
                      blog.dislikedBy.push(user.username); // Add username to list of likers
                      // Save blog data
                      blog.save(err => {
                        // Check if error was found
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                        } else {
                          res.json({ success: true, message: 'Blog disliked!' }); // Return success message
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

export const commentBlog = (req: any, res: any) => {
  if (!req.body.comment) {
    res.json({ success: false, message: 'No comment provided' }); // Return error message
  } else {
    // Check if id was provided in request body
    if (!req.body.id) {
      res.json({ success: false, message: 'No id was provided' }); // Return error message
    } else {
      // Use id to search for blog post in database
      BlogShema.findOne({ _id: req.body.id }, (err, blog) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid blog id' }); // Return error message
        } else {
          // Check if id matched the id of any blog post in the database
          if (!blog) {
            res.json({ success: false, message: 'Blog not found.' }); // Return error message
          } else {
            // Grab data of user that is logged in
            userModel.findOne({ _id: req.user._id }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: 'Something went wrong' }); // Return error message
              } else {
                // Check if user was found in the database
                if (!user) {
                  res.json({ success: false, message: 'User not found.' }); // Return error message
                } else {
                  // Add the new comment to the blog post's array
                  blog.comments.push({
                    comment: req.body.comment, // Comment field
                    commentator: user.username, // Person who commented
                  });
                  // Save blog post
                  blog.save(err => {
                    // Check if error was found
                    if (err) {
                      res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                    } else {
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
