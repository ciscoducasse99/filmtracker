# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Filmtracker - Cisco Ducasse

![Filmtracker](frontend/public/logo512.png)

## Tech Stack

- React
- MongoDB/Mongoose ORM
- Node.js/ Express.js
- Bootstrap

This app was made as an upgraded version of the typical CRUD movie app a lot of junior devs tackle. I wanted a way to be able to save what films I have watched, save what films I would eventually like to watch, and **most importantly** recommend films to other users.

I'm using Express as the backend server. I'm using [TMDB API](https://api.themoviedb.org) to serve me current movies and shows, as well as trending films, popular films, etc. I'm using MongoDB to keep track of user data, as well as connections and recommendations between users. React is my frontend go-to, and styling with Bootstrap has became the norm.

Since writing this, the current phase of development has been strictly focused on styling the frontend. The frontend is currently making all calls to the TMDB API to serve data, but will soon be switched to backend. The next phase will consist of running all the correct api calls between frontend & backend, as well as implementing an auth system so new users can sign up as well as sign in.

#### Todos

- Implement authentication
- Structure and implement API to handle specific queries
- Use Socket.IO to create an avenue for users to be able to keep track of recommendations between each other.
- Create a profile component for existing users so they can keep track of their lists
