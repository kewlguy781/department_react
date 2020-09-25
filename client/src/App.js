import React from 'react';
import NavBar from "./components/Navbar"
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Container} from "semantic-ui-react"
import Home from "./components/Home"
import Products from "./deptprods/Products"
import ProductView from "./deptprods/ProductView"

function App() {
  return (
    <>
    <NavBar />
    <Container>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={ProductView} />
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/" component={Home} />
       */}
</Switch>

    </Container>
    </>
      

  );
}

export default App;

//TODO List
//Create Department Products Page *
  //update router for department *
  //make sure you push it to state *
//Create Department Products Form (New only)
//Create Comment view (<Comment>)
//Create Department Products View with comments
//Create Department Products View with Comment Form (New only)
//Create Edit for Products
//Credit Edit for comments
//Create delete for Products
//Create delete for comments

//Styling (Thursday!)