import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => {
return ( <>
    <div style={styles.navbar}>
    <Link to="/">Home</Link>  <span></span>
    <Link to="/Departments">Departments</Link>  <span></span>
    <a href="http://localhost:3001/rails/info/routes">Rail Routes</a>  <span></span>
    <a href="http://localhost:3001/api/products">All Products</a>  <span></span>
    <a href="http://localhost:3001/api/comments/all">All Comments</a>  <span></span>
    </div>
</>
)
}

const styles = {
    navbar: {
      background: "black",
      padding: "10px",
    },
  };

export default NavBar;