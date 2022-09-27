import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetails.css"

function ProductDetails() {
  let params = useParams();

      let [prod, setproduct] = useState({});

  useEffect(() => {
   axios
   .get(`https://fakestoreapi.com/products/${params.id}`)
   .then((singleproduct)=>{
    console.log(singleproduct.data);
    setproduct(singleproduct.data);
   })
   .catch((err)=>{
    console.log(err);
   })
  }, []);


  return (
    <>
    <div className="container">
      <div class="wrapper">
        <div class="main_card">
          <div class="card_left">
            <div class="card_datails">
              <h2>{prod.title}</h2>
              <div class="card_cat">
                <p >Category: {prod.category}</p>
                
                <p >Rating: {prod.rating}</p>
              </div>
              <h4 class="disc">{prod.description}</h4>
              
            </div>
          </div>
          <div class="card_right">
            <div class="img_container">
              <img src={prod.image}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductDetails;