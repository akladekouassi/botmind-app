import * as express from 'express';
const passport = require('passport');
import {
  createNewBlog,
  getAllBlogs,
  getBlogByID,
  updateBlog,
  getBlogsForSpecificUser,
  deleteBlog,
  LikeABlog,
  commentBlog,
  dislikeBlog,
} from 'libs/database-logics/src/index';
import { userModel } from 'apps/backend/src/app/routes/users/user-models';

const router = express.Router();

/* ===============================================================
     ADD NEW BLOG POST
  =============================================================== */
router.post('/addNewBlog', passport.authenticate('jwt', { session: false }), (req, res) => {
  const blogFromQuery: any = req.body;
  const blog = createNewBlog(blogFromQuery, res);
  return blog;
});

/* ===============================================================
     GET ALL BLOGS 
  =============================================================== */
router.get('/allBlogs', passport.authenticate('jwt', { session: false }), (req, res) => {
  const blogs = getAllBlogs(res);
  return blogs;
});

/* ===============================================================
     GET BLOG BY USER ID
  =============================================================== */
router.get('/singleBlog/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const blog = getBlogByID(req.params.id, req, res);
  return blog;
});

/* ===============================================================
     GET ALL BLOG FOR USER AUTHENTICATED
  =============================================================== */
router.get('/blogs/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const blogs = getBlogsForSpecificUser(req.params.id, res);
  return blogs;
});

/* ===============================================================
     UPDATE BLOG
  =============================================================== */
router.put('/updateBlog', passport.authenticate('jwt', { session: false }), (req, res) => {
  const result = updateBlog(req.body, req, res);
  return result;
});

/* ===============================================================
     DELETE BLOG
  =============================================================== */
router.delete('/deleteBlog/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const result = deleteBlog(req, res);
  return result;
});

/* ===============================================================
     LIKE BLOG
  =============================================================== */
router.put('/like', passport.authenticate('jwt', { session: false }), (req, res) => {
  const result = LikeABlog(req, res);
  return result;
});

/* ===============================================================
     DISLIKE BLOG
  =============================================================== */
router.put('/dislike', passport.authenticate('jwt', { session: false }), (req, res) => {
  const result = dislikeBlog(req, res);
  return result;
});

/* ===============================================================
     COMMENT ON BLOG POST
  =============================================================== */
router.post('/comment', passport.authenticate('jwt', { session: false }), (req, res) => {
  const result = commentBlog(req, res);
  return result;
});

export default router;
