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
