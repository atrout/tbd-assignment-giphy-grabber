# Giphy Grabber

This is a small React app that uses the [Giphy React SDK](https://developers.giphy.com/docs/sdk/#web) to show gifs related to search terms or, if no search terms have been provided, a collection of trending gifs.

## Running locally

After cloning the repo locally, in the project directory you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
To run all the tests outside of watch mode, use the command:
```yarn test a --watchAll=false```

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

You can run this build locally using serverless:
```
yarn global add serve
serve -s build
```