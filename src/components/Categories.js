import React, { useState, useEffect } from "react";
// import axios from "axios";
import { NavLink } from "react-router-dom";
// import Home from "./Home";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   axios.get("https://fakestoreapi.com/products/category/jewelery")
  //     .then((response) => setData(response.data));
  // }, []);
  // const {  description, title, price,  } = props;

  useEffect(() => {
    async function categoriesList() {
      try {
        const requestUrl = "https://fakestoreapi.com/products/categories";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log(responseJSON);
        setCategories(responseJSON);
      } catch (error) {
        console.log("error message");
      }
    }
    categoriesList();
  }, []);

  return (
    <>
      <h2 className="text-center text-info">Let's shop</h2>
     
      <div className="container ">
        <div className="row">
          <div className="col md-3">
          <button className="btn btn-warning w-75 mb-4">
              
              Electronics
            </button>
            
          </div>

          <div className="col-md-3">
          <NavLink to={`/products`} className="nav-link">
          
           
          <button className="btn btn-warning w-75 mb-4"> jewelery 
          </button></NavLink>
          </div>

          <div className="col md-3">
            <button className="btn btn-warning w-75 mb-4">
              women's clothing
            </button>
          </div>
          <div className="col md-3">
            <button className="btn btn-warning w-75 mb-4">
              men's clothing
            </button>
          </div>
        </div>
      </div>
         {/* {
        data.map((item, key) => {
            return <Home key={key} />;
          })
          }
         
          <div className="col-md-4 mt-3 mb-2">
          <div class="card">
              <div className="card-header">
                <h5 className="text-center"> title :{title}</h5>
              </div>
              <div className="card-body">
                <p className="text-justify">description: {description} </p>
              </div>
              <div className="card-footer">
                <h5 className="text-success float-end">Price :{price}</h5>
              </div>
            </div>
          </div>
          */}
      
      
    </>
  );
};

export default Categories;
