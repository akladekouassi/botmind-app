const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
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
   API_URL: "${process.env.API_URL}",
   ANOTHER_API_SECRET: "${process.env.ANOTHER_API_SECRET}"
};
`;

const backEnvironmentFileContent = `
export const environment = {
   production: ${isProduction},
   API_URL: "${process.env.API_URL}",
   ANOTHER_API_SECRET: "${process.env.ANOTHER_API_SECRET}"
};
`;

// write the content to the respective file
const generateFrontEnv = () =>
  writeFile(targetFrontendPath, frontEnvironmentFileContent, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${targetFrontendPath}`);
  });

const generateBackendEnv = () =>
  writeFile(targetBackendPath, backEnvironmentFileContent, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${targetBackendPath}`);
  });

generateFrontEnv();
generateBackendEnv();
