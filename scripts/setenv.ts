const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

if (
  !process.env.LOCAL_API_URL ||
  !process.env.MONGODB_USER_PASS ||
  !process.env.MONGODB_URL ||
  !process.env.MONGODB_NAME ||
  !process.env.MONGODB_AUTH_SOURCE ||
  !process.env.MONGODB_AUTH_MECHANISME ||
  !process.env.PROD_API_URL ||
  !process.env.LOGIN ||
  !process.env.LOGOUT ||
  !process.env.CHECKAUTH ||
  !process.env.REGISTER_USER ||
  !process.env.GET_USER_PROFILE ||
  !process.env.UPDATE_USER_PROFILE ||
  !process.env.ADD_NEW_BLOG ||
  !process.env.GET_ALL_BLOGS ||
  !process.env.GET_SINGLE_BLOG ||
  !process.env.GET_BLOGS_FOR_USER ||
  !process.env.UPDATE_BLOG ||
  !process.env.DELETE_BLOG ||
  !process.env.LIKE_A_BLOG ||
  !process.env.DISLIKE_A_BLOG ||
  !process.env.COMMENT_A_BLOG ||
  !process.env.CHECK_EMAIL_API_URL ||
  !process.env.CHECK_USERNAME_API_URL ||
  !process.env.DELETE_USER_ACCOUNT_API_URL ||
  !process.env.GET_ALL_USERS_API_URL
) {
  console.error('All the required environment variables were not provided!');
  process.exit(-1);
}

const targetFrontendPath = isProduction
  ? `./apps/frontend/src/environments/environment.prod.ts`
  : `./apps/frontend/src/environments/environment.ts`;
// BACKEND PATH
const targetBackendPath = isProduction
  ? `./apps/backend/src/environments/environment.prod.ts`
  : `./apps/backend/src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const frontEnvironmentFileContent = `
export const environment = {
   production: ${isProduction},
   LOCAL_API_URL: "${process.env.LOCAL_API_URL}",
   PROD_API_URL: "${process.env.PROD_API_URL}",
   LOGIN_API_URL: "${process.env.LOCAL_API_URL}${process.env.LOGIN}",
   LOGOUT_API_URL: "${process.env.LOCAL_API_URL}${process.env.LOGOUT}",
   CHECKAUTH_API_URL: "${process.env.LOCAL_API_URL}${process.env.CHECKAUTH}",
   REGISTER_USER_API_URL: "${process.env.LOCAL_API_URL}${process.env.REGISTER_USER}",
   GET_USER_PROFILE_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_USER_PROFILE}",
   UPDATE_USER_PROFILE_API_URL: "${process.env.LOCAL_API_URL}${process.env.UPDATE_USER_PROFILE}",
   ADD_NEW_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.ADD_NEW_BLOG}",
   GET_ALL_BLOGS_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_ALL_BLOGS}",
   GET_SINGLE_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_SINGLE_BLOG}",
   GET_BLOGS_FOR_USER_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_BLOGS_FOR_USER}",
   UPDATE_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.UPDATE_BLOG}",
   DELETE_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.DELETE_BLOG}",
   LIKE_A_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.LIKE_A_BLOG}",
   DISLIKE_A_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.DISLIKE_A_BLOG}",
   COMMENT_A_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.COMMENT_A_BLOG}",
   CHECK_EMAIL_API_URL: "${process.env.LOCAL_API_URL}${process.env.CHECK_EMAIL_API_URL}",
   CHECK_USERNAME_API_URL: "${process.env.LOCAL_API_URL}${process.env.CHECK_USERNAME_API_URL}",
   DELETE_USER_ACCOUNT_API_URL: "${process.env.LOCAL_API_URL}${process.env.DELETE_USER_ACCOUNT_API_URL}",
   GET_ALL_USERS_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_ALL_USERS_API_URL}",
   MONGODB_USER_PASS:"${process.env.MONGODB_USER_PASS}",
   MONGODB_URL:"${process.env.MONGODB_URL}",
   MONGODB_NAME: "${process.env.MONGODB_NAME}",
   MONGODB_AUTH_SOURCE:"${process.env.MONGODB_AUTH_SOURCE} ",
   MONGODB_AUTH_MECHANISME:"${process.env.MONGODB_AUTH_MECHANISME}"
};
`;

const backEnvironmentFileContent = `
export const environment = {
   production: ${isProduction},
   LOCAL_API_URL: "${process.env.LOCAL_API_URL}",
   PROD_API_URL: "${process.env.PROD_API_URL}",
   LOGIN_API_URL: "${process.env.LOCAL_API_URL}${process.env.LOGIN}",
   LOGOUT_API_URL: "${process.env.LOCAL_API_URL}${process.env.LOGOUT}",
   CHECKAUTH_API_URL: "${process.env.LOCAL_API_URL}${process.env.CHECKAUTH}",
   REGISTER_USER_API_URL: "${process.env.LOCAL_API_URL}${process.env.REGISTER_USER}",
   GET_USER_PROFILE_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_USER_PROFILE}",
   UPDATE_USER_PROFILE_API_URL: "${process.env.LOCAL_API_URL}${process.env.UPDATE_USER_PROFILE}",
   ADD_NEW_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.ADD_NEW_BLOG}",
   GET_ALL_BLOGS_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_ALL_BLOGS}",
   GET_SINGLE_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_SINGLE_BLOG}",
   GET_BLOGS_FOR_USER_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_BLOGS_FOR_USER}",
   UPDATE_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.UPDATE_BLOG}",
   DELETE_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.DELETE_BLOG}",
   LIKE_A_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.LIKE_A_BLOG}",
   DISLIKE_A_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.DISLIKE_A_BLOG}",
   COMMENT_A_BLOG_API_URL: "${process.env.LOCAL_API_URL}${process.env.COMMENT_A_BLOG}",
   CHECK_EMAIL_API_URL: "${process.env.LOCAL_API_URL}${process.env.CHECK_EMAIL_API_URL}",
   CHECK_USERNAME_API_URL: "${process.env.LOCAL_API_URL}${process.env.CHECK_USERNAME_API_URL}",
    DELETE_USER_ACCOUNT_API_URL: "${process.env.LOCAL_API_URL}${process.env.DELETE_USER_ACCOUNT_API_URL}",
   GET_ALL_USERS_API_URL: "${process.env.LOCAL_API_URL}${process.env.GET_ALL_USERS_API_URL}",
   MONGODB_USER_PASS:"${process.env.MONGODB_USER_PASS}",
   MONGODB_URL:"${process.env.MONGODB_URL}",
   MONGODB_NAME: "${process.env.MONGODB_NAME}",
   MONGODB_AUTH_SOURCE:"${process.env.MONGODB_AUTH_SOURCE} ",
   MONGODB_AUTH_MECHANISME:"${process.env.MONGODB_AUTH_MECHANISME}"
};
`;

// write the content to the respective file
const generateFrontEnv = () =>
  writeFile(targetFrontendPath, frontEnvironmentFileContent, err => {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${targetFrontendPath}`);
  });

const generateBackendEnv = () =>
  writeFile(targetBackendPath, backEnvironmentFileContent, err => {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${targetBackendPath}`);
  });

generateFrontEnv();
generateBackendEnv();
