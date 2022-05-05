import React from "react";
import ReactDOM from "react-dom"
import App from "./components/App.jsx"

ReactDOM.render(
    <App />, document.querySelector('#root')
)

//create a constant that keeps track of the title and content
//pass new note back to app component
//in app component, we'll have an rray to add it to the array and the array has state 
//take the array and render separate separate note component for each item in the array 

//deleting notes
//callback fromnote compinent that's going to trigger a delete function 
//delete funciton is going to live in app.js and will need filter function to filter out the item that needs deletion 
//think about how to pass an id to the note component and pass it back to app component 
