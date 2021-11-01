# Installing Node.js and npm with nvm

**Node.js** is a Javascript runtime environment that will allow you to execute Javascript code outside of a web browser. **npm** is Node.js's default package manager, which will allow you to conveniently manage the dependencies own applications. Node.js and npm are both open source projects.

To install Node.js and npm, we will be using another application, we will be using another program, **nvm** (node version manager). To use nvm, run either of the following scripts in your home directory:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Complete nvm source code, documentation, and installation troubleshooting can be found here: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

The nvm installation script should install Node.js (and therefore npm) by default. Verify the successful installation by running <br />
`node -v` and `npm -v`, which will output the programs' respective version numbers.

If Node.js was not installed, run `nvm install --LTS` to install the latest stable version of Node.js.

# Installing yarn with npm

Rather than rely on npm as our package manager, we will use yarn, an alternative that will offer significant performance improvements. Install yarn with the command <br /> `npm install -g yarn`. 

# Getting Started with Create React App

With everything installed, we can now begin exploring JavasScript through React!

As a convenient way to get started, we will use the Create React App environment, which will perform all the frontend setup necessary for a simple, single-page React application. For now, we will not discuss any React features, but rather use React's dynamic re-rendering to introduce core features of the JavasScript language. We will examine React itself in more detail in Week 7.

Run the following commands to set up Create React App:

```
npx create-react-app my-app
cd my-app
yarn start
```

## Available Scripts

In the project directory (my-app), you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
