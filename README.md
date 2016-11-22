## Counter Strike Skins Contest

This is a stripped down version of a commercial app in development that I have been working on. 
The vast majority of business logic and other mission-critical material has been removed from both
the code and the User Interface. Instead, I've left intact some interesting key development features.

### Running the App
You'll need Node.js to run the application.

From the root directory, enter `npm install` in a Terminal to install npm packages. 
Next enter `npm run install:prod` to build the application, then `npm start` to initialize 
the server. Runs from `localhost:3000` in the browser.

### Points of Interest

- Custom controller -- As React is simply a view library, a lightweight controller to handle interactions with our server 
was necessary. In `app/main.jsx` is a Controller class that handles both data and mounting our 
React components. In production, there are many more methods on this class.

- Custom Router -- Attempts at integrating React Router into this resulted in a mess of configuration
hacks, and we found that it would necessitate a great deal of rewrite. I decided instead to write
some lightweight front-end routing logic myself. See more detail in `app/app.jsx`.

- User Components and API Calls -- Upon clicking a username, the app grabs data from the Steam API
and displays it to the viewer. In order to get around Cross-Origin Resource Sharing restrictions,
the User component asks our Controller to query our server. Our server (see `routing/steam.js`)
calls the Steam API with the data we have provided, grabs user info from there, then passes it back
to the Controller. See `app/components/User` for more info.