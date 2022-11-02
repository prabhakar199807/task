import React, { useEffect, useState } from "react";
import axios from "axios";


const Products = (props) => {
  

  const [data, setData] = useState([]);
  // const [readmore, setReadmore] = useState(false);

  // const toggle = () => {
  //   setReadmore(!readmore)
  // }


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => setData(response.data));
  }, []);
  const { id, image, description, title, price, rating  } = props;

  return (
    <div className="container">
      <div className="row">
        {
				data.map((item, key) => {
          return <Products key={key} {...item} />
        })
				}
        <div className="col-md-6 mt-3 mb-2">
          <div class="card">
           <img src={image} alt={image} className="card-img-top" />
            <div class="card-header">
              <h5 class="text-center"> title :{title}</h5>
            </div>
            <div className="card-body">
              <p className="text-justify"><strong>description :</strong>
                {/* {
                  readmore ?  description :`${description.substring(0,200)}...`
                }
                <button className="float-end btn-link" onClick={() =>toggle()} > 
                { readmore ? 'showless' :'read more'}</button> */}
                {description}
               
              </p>
            </div>
            <div className="card-footer">
              <h5 className="text-success float-end">Price :{price}</h5>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
