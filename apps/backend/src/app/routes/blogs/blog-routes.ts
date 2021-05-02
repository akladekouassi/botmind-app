import * as express from 'express';
import { isEqual, pick } from 'lodash/fp';
import {
  createUser,
  authenticateUser,
  userModel,
  createNewBlog,
  getAllBlogs,
  getBlogByID,
  updateBlog,
  getBlogsForSpecificUser,
  deleteBlog,
  LikeABlog,
  commentBlog,
  dislikeBlog,
} from '../../../../../../libs/database-logics/src/index';
import { User } from '../../../../../../libs/data-models/index';
import {
  ensureAuthenticated,
  validateMiddleware,
  shortIdValidation,
  searchValidation,
  userFieldsValidator,
  isUserValidator,
} from '../../helpers/index';

const router = express.Router();
// Routes

/* ===============================================================
     ADD NEW BLOG POST
  =============================================================== */
router.post('/addNewBlog', ensureAuthenticated, (req, res) => {
  const blogFromQuery: any = req.body;
  const blog = createNewBlog(blogFromQuery, res);
  return blog;
});

/* ===============================================================
     GET ALL BLOGS 
  =============================================================== */
router.get('/allBlogs', ensureAuthenticated, (req, res) => {
  const blogs = getAllBlogs(res);
  return blogs;
});

/* ===============================================================
     GET BLOG BY USER ID
  =============================================================== */
router.get('/singleBlog/:id', ensureAuthenticated, (req, res) => {
  const blog = getBlogByID(req.params.id, req, res);
  return blog;
});

/* ===============================================================
     GET ALL BLOG FOR USER AUTHENTICATED
  =============================================================== */
router.get('/blogs/:id', ensureAuthenticated, (req, res) => {
  const blogs = getBlogsForSpecificUser(req.params.id, res);
  return blogs;
});

/* ===============================================================
     UPDATE BLOG
  =============================================================== */
router.put('/updateBlog', ensureAuthenticated, (req, res) => {
  const result = updateBlog(req.body, req, res);
  return result;
});

/* ===============================================================
     DELETE BLOG
  =============================================================== */
router.delete('/deleteBlog/:id', ensureAuthenticated, (req, res) => {
  const result = deleteBlog(req, res);
  return result;
});

/* ===============================================================
     LIKE BLOG
  =============================================================== */
router.put('/like', ensureAuthenticated, (req, res) => {
  const result = LikeABlog(req, res);
  return result;
});

/* ===============================================================
     DISLIKE BLOG
  =============================================================== */
router.put('/dislike', ensureAuthenticated, (req, res) => {
  const result = dislikeBlog(req, res);
  return result;
});

/* ===============================================================
     COMMENT ON BLOG POST
  =============================================================== */
router.post('/comment', ensureAuthenticated, (req, res) => {
  // Check if comment was provided in request body
  const result = commentBlog(req, res);
  return result;
});

export default router;
