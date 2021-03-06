# BotmindApp

This project was generated using [Nx](https://nx.dev) and is currently using last version of [Angular](https://angular.io) for the front and [Express](https://expressjs.com) for the backend

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

## Installation

You will need the following libraries and frameworks to run this.

- [Nx](https://nx.dev)
- [NodeJS/npm v12](https://nodejs.org/en/download/)
- [Create React App](https://create-react-app.dev/docs/getting-started/)
- [Typescript](https://www.typescriptlang.org/#download-links)
- [Angular CLI](https://cli.angular.io/)
- [Visual Studio Code](https://code.visualstudio.com/download) (Recommended IDE)
- [Yarn](https://yarnpkg.com/lang/en/) . Alternatively you can use Yarn instead of NPM

Once you've installed all of these libraries, run `npm install` or `yarn` from the root of the project to download all of the dependencies related to this project. Once all are succesfully installed, the project is ready for launch. NPM/Yarn are the dependency/package managers we use to install libraries for this application.

## Development server

Run `yarn dev` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Development Process

For any new feature Implementation, Bug fix, code refactor, code performing, Unit or fonctionnal test writting, you have to follow this steps:

## 1

you have to work on new branch anytimes. for that, you have to run this commande to create new branch:

- ` git checkout -b <new branch>`

## 2

After your work and after executed the ` yarn commit` or `git cz`, you have to run this commande to update your repository from the original repository:

- ` git pull --rebase upstream master`

## 3

After updated your repository, you have to run this commande to push your work:

- `git push -f origin <your branch>`

## 4

Now you have to wait, to make sure your work is approuved and merged, if that is OK, before starting another implementation, you have to:

- `git checkout master` and `git pull --rebase upstream master`

## 5

If you are sure you have waited for your work to be approved and merge into the master branch of the original project, you just have to resume the process for a new implementation

This will avoid conflicts. However, if you are facing a conflict, you can use the [diffMerge](https://sourcegear.com/diffmerge/) for resolution. It facilitates conflict resolution.

## Code Style & Guidelines

The code base is based on the officical [Angular Style Guide](https://angular.io/guide/styleguide) that is _STRONGLY RECOMMENDED READING_ before starting work.
Here are the few guidelines when working with this code base.

- Use camelCase for variables i.e `aNewVariable` and methods i.en `addNewElement()`
- Use PascalCase for Services i.e `AuthService`, classes i.e `Authenticator` and components i.e `AuthComponent`
- Use KebabCase for attributes in HTML .ie `<a id='home-link' class='home-link'>Home</a>`
- Use KebabCase for file names, i.e the `AuthComponent` would be name `auth-component.ts`
- Use Upper Case Snake Case for constants i.e `AUTHENTICATION_TYPES`

References

- [Read this for a good explanation on Progamming Cases](https://www.chaseadams.io/posts/most-common-programming-case-types/)
- [A good read on naming things](https://deviq.com/naming-things/)

## Commit changes

This project uses conventional commits based on the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit). This allows us to completely automate versioning and tagging of our releases. So

- Always work in a branch for any feature or fix that you have to work on
- Make sure that your [commits are atomic](https://en.wikipedia.org/wiki/Atomic_commit).

When you are ready to commit, after staging your changes, make sure to use

```
yarn commit
```

or

```
git cz
```

instead of the regular `git commit`. This will launch a [commitizen](https://github.com/commitizen/cz-cli) prompt that will help you properly format your commit message to respect the conventional commit guidelines.

All commits are linted with a pre-commit hook by [commitlint](https://github.com/conventional-changelog/commitlint) and your commit will be rejected if it does not meet the conventional commit guidelines.

DO NOT USE `the git --no-verify` COMMAND TO FORCE YOUR COMMIT IF IT HAS NOT BEEN PROPERLY FORMATTED.

If there is a good and specific reason you need to do so, please contact the maintainer of the project to get approval first.

## Commit squash

If you hav a more than one commit in a feature or fix, make sure to squash all commit before creating a pull request.

You can run this commande to squash a commit

- ` git rebase -i HEAD~<number of commit>`

## Generate a new application

Run `nx g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@frontend/mylib`.

## Generate component

Run `nx g @nrwl/angular:component --project=(projectName or libName) COMPONENT-NAME` to generate a new component.

## Code scaffolding

Run `nx g @nrwl/angular:component my-component --project=my-app` to generate a new component.

## Build

Run `yarn ` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Versioning, Tagging and Releases Flow

Thanks to conventional messages, the task of versioning and tagging this application will been completely automated on our CI pipeline.

### Releases

We'll have two kinds of releases:

### Integration

Integration releases are created when a PR is submitted against master by one of the developers. This PR will trigger the [BOTMIND-UI]() job in GITHUB. This job will:

- Use [standard-version]() to automatically generate the next pre-release version based on the existing version in [package.json](package.json). The version generated will have the `integration` prefix attached as in for example `8.0.1-integration`.
- Tag the Gitlab repo with the generated version on successful build. The tag will include the build number

Integration versions are meant to be deployed and tested in our DEV/TEST environment
