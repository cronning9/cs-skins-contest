const text = {
before: `
## Purpose

This is a sample of some select functionality of a product currently in development. The commissioner of the project
has granted myself, Christopher Ronning, express permission to use all code and UI components herein.

## Test Some Functionality

The home page that you see now normally has some functionality, but as it is essentially the core of an application
in development, I have stripped it from this portfolio piece. All data below is a static representation of
results from a hypothetical video game on the Steam platform. 

Clicking on a username in the table below will demonstrate the following functionality: 

1. Our User Component triggers our Controller to make a call to our Express middleware.
2. Middleware handles data passed from our front end, and makes a call to the Steam API with said data.
3. Steam API hands back user data in JSON format, which our middleware then processes for consumption.
4. Our server responds to the front-end with processed JSON data.
5. Controller passes that data to the User component and render a view.`,

calculator: `
## Winner Calculator

This winner is randomly determined, based on the results of the game. Enter the results below and it will tell you who has won. (This deterministic pseudorandom system is similar to on-blockchain BitCoin gambling systems, if you want a point of reference.) I've pre-filled some made-up data as an example.
`,

after: `
## Fine Print

Thank you for taking a look! The full project is still in development. I may post a link to the production app when it
has been completed.
`
};

export default text;
