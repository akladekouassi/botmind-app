import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';
const BlogShema = require('apps/backend/src/app/routes/blogs/blog-models');
import { User } from 'libs/data-models/index';
import { userModel } from 'apps/backend/src/app/routes/users/user-models';

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

export const checkUsername = (username: string, res: any) => {
  if (!username) {
    res.json({ success: false, message: 'Username was not provided' }); // Return error
  } else {
    userModel.findOne({ username }, (err, user) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (user) {
          res.json({ success: false, message: 'Username is already taken' });
        } else {
          res.json({ success: true, message: 'Username is available' });
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

// PROFILE
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

export const deleteAccount = (username: string, email: string, req: any, res: any) => {
  userModel.findOneAndRemove({ username, email }).exec((err, response) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      if (!response) {
        res.json({ success: false, message: "You can't delete this account" });
      } else {
        res.clearCookie('connect.sid');
        req.logout();
        res.json({ success: true, message: 'Account deleted succesfully', response });
      }
    }
  });
};

export const getAllUsers = (res: any) => {
  return userModel
    .find({}, (err, users) => {
      if (err) {
        return res.json({ success: false, message: err });
      } else {
        if (!users) {
          return res.json({ success: false, message: 'No users found.' });
        } else {
          return res.json({ success: true, users });
        }
      }
    })
    .sort({ _id: -1 });
};

// ALL QUERIES RELATIVES TO BLOGGGG
export const getAllBlogs = (res: any) => {
  return BlogShema.find({}, (err, blogs) => {
    if (err) {
      return res.json({ success: false, message: err });
    } else {
      if (!blogs) {
        return res.json({ success: false, message: 'No blogs found.' });
      } else {
        return res.json({ success: true, blogs: blogs });
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
          return res.json({ success: true, blogs: blog });
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
    comments: [],
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
    res.json({ success: false, message: 'No id was provided.' });
  } else {
    BlogShema.findOne({ _id: req.body.id }, (err, blog) => {
      if (err) {
        res.json({ success: false, message: 'Invalid blog id' });
      } else {
        if (!blog) {
          res.json({ success: false, message: 'That blog was not found.' });
        } else {
          userModel.findOne({ _id: req.user._id }, (err, user) => {
            if (err) {
              res.json({ success: false, message: 'Something went wrong.' });
            } else {
              if (!user) {
                res.json({ success: false, message: 'Could not authenticate user.' });
              } else {
                if (parseInt(user._id) === parseInt(blog.createdBy)) {
                  res.json({ success: false, message: 'Cannot like your own post.' });
                } else {
                  if (blog.likedBy.includes(user.username)) {
                    res.json({ success: false, message: 'You already liked this post.' });
                  } else {
                    if (blog.dislikedBy.includes(user.username)) {
                      blog.dislikes--;
                      const arrayIndex = blog.dislikedBy.indexOf(user.username);
                      blog.dislikedBy.splice(arrayIndex, 1);
                      blog.likes++;
                      blog.likedBy.push(user.username);

                      blog.save(err => {
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' });
                        } else {
                          res.json({ success: true, message: 'Blog liked!' });
                        }
                      });
                    } else {
                      blog.likes++;
                      blog.likedBy.push(user.username);
                      blog.save(err => {
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' });
                        } else {
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

export const dislikeBlog = (req: any, res: any) => {
  if (!req.body.id) {
    res.json({ success: false, message: 'No id was provided.' });
  } else {
    BlogShema.findOne({ _id: req.body.id }, (err, blog) => {
      if (err) {
        res.json({ success: false, message: 'Invalid blog id' });
      } else {
        if (!blog) {
          res.json({ success: false, message: 'That blog was not found.' });
        } else {
          userModel.findOne({ _id: req.user._id }, (err, user) => {
            if (err) {
              res.json({ success: false, message: 'Something went wrong.' });
            } else {
              if (!user) {
                res.json({ success: false, message: 'Could not authenticate user.' });
              } else {
                if (parseInt(user._id) === parseInt(blog.createdBy)) {
                  res.json({ success: false, message: 'Cannot dislike your own post.' });
                } else {
                  if (blog.dislikedBy.includes(user.username)) {
                    res.json({ success: false, message: 'You already disliked this post.' });
                  } else {
                    if (blog.likedBy.includes(user.username)) {
                      blog.likes--;
                      const arrayIndex = blog.likedBy.indexOf(user.username);
                      blog.likedBy.splice(arrayIndex, 1);
                      blog.dislikes++;
                      blog.dislikedBy.push(user.username);

                      blog.save(err => {
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' });
                        } else {
                          res.json({ success: true, message: 'Blog disliked!' });
                        }
                      });
                    } else {
                      blog.dislikes++;
                      blog.dislikedBy.push(user.username);

                      blog.save(err => {
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' });
                        } else {
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

export const commentBlog = (req: any, res: any) => {
  if (!req.body.comment) {
    res.json({ success: false, message: 'No comment provided' });
  } else {
    if (!req.body.id) {
      res.json({ success: false, message: 'No id was provided' });
    } else {
      BlogShema.findOne({ _id: req.body.id }, (err, blog) => {
        if (err) {
          res.json({ success: false, message: 'Invalid blog id' });
        } else {
          if (!blog) {
            res.json({ success: false, message: 'Blog not found.' });
          } else {
            userModel.findOne({ _id: req.user._id }, (err, user) => {
              if (err) {
                res.json({ success: false, message: 'Something went wrong' });
              } else {
                if (!user) {
                  res.json({ success: false, message: 'User not found.' });
                } else {
                  blog.comments.push({
                    comment: req.body.comment,
                    commentator: user.username,
                  });

                  blog.save(err => {
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
