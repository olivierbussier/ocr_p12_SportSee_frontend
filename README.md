# Getting Started with SportSee frontend app

## Prerequisites
In order to run this application you have to install:
- [nodeJS](https://nodejs.org/en/)
- a packet managet like [yarn](https://yarnpkg.com/getting-started/install)

After that SportSee application needs two components running to work:
- backend (nodeJS application)
- frontend

## Back-end
the backend repository could be find on github : https://github.com/olivierbussier/p12_SportSee_BackEnd. Clone it & install node dépendencies with the command `yarn` as usual. Then start the backend using command `yarn dev`. Application will start and listen to port 3000.

It is also possible to run the backend using docker, see the github documentation for detailled explanations.

## Front-end

The github repository for the front-end could be find at : https://github.com/olivierbussier/p12_SportSee_frontend. Clone it & install dependencies using command `yarn`. Then start the front-end in developpement mode using the command `yarn start`. As the port 3000 is already used by the backed, you will be prompted to use different port, probably 3001.

## Available Scripts

This section describe other scripts used to manage build & run of the front-end

For information, this application was initiated using standart React create app, so the scripts are those of this build tool.

- `yarn start` : Runs the app in the development mode. The page will reload when you make changes. You may also see any lint errors in the console.
- `yarn test` : Launches the test runner in the interactive watch mode.See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- `yarn build` : Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the React section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

See React documentation to learn new things about React
- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).
- Code Splitting : [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- Analyzing the Bundle Size : [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- Making a Progressive Web App : [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- Advanced Configuration : [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- Deployment : [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
- if you get issues with `yarn build`, read [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
