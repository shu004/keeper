// Create a new React app.
// Create a new folder called components
// Create a App.jsx component that returns a div, export it and import it in index.js
// Create a Header.jsx component that renders a <header> element to show the Keeper in an <h1>.
// Show Header component in the App component (in return)
// Create a Footer.jsx component that renders a <footer> element to show a copyright message in a <p> with a dynamically updated year.
// Show Footer compoenent in App component
// Create a Note.jsx component to show a <div> element with a <h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

import React from "react";
import ReactDOM from "react-dom"
import App from "./components/App.jsx"

ReactDOM.render(
    <App />, document.querySelector('#root')
)