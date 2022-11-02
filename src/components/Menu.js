import React from "react";
import { NavLink } from "react-router-dom";
export default function Menu() {
 

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <NavLink to={`/`} className="navbar-brand">
          shopping cart
        </NavLink>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/home`} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/products`} className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/categories`} className="nav-link">
                Categories
              </NavLink>
            </li>
          </ul>
          <div className="main">
          <div className ="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search this blog" 
            />
            <div className ="input-group-append">
              <button className ="btn btn-secondary" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="input-group-append ">
              <button className ="btn btn-primary " type="button">
                <i className="fas fa-shopping-cart"></i>
                <div  className ="badge bg-danger">5</div>
              </button>
            </div>
            <div className="input-group-append mr-2">
              <button className ="btn btn-primary" type="button">
              <i className="fas fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </nav>
  );
}
