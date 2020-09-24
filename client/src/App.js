import React from 'react';
import NavBar from "./components/Navbar"
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Container} from "semantic-ui-react"
import Home from "./components/Home"

function App() {
  return (
    <>
    <NavBar />
    <Container>
      <Switch>
      <Home />
      <Route exact path="/" componet={Home} />
      {/* <Route exact path="/" componet={Home} />
      <Route exact path="/" componet={Home} />
      <Route exact path="/" componet={Home} />
      <Route exact path="/" componet={Home} />
       */}
</Switch>

    </Container>
    </>
      

  );
}

export default App;

//TODO List
//Create Department Products Page
  //update router for department
//Create Department Products Form (New only)
//Create Comment view (<Comment>)
//Create Department Products View with comments
//Create Department Products View with Comment Form (New only)
//Create Edit for Products
//Credit Edit for comments
//Create delete for Products
//Create delete for comments

//Styling (Thursday!)