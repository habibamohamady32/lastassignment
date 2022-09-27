import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../store/actions";

function Products() {
  const dispatch=useDispatch()
    const [productsList, setproductsList] = useState([]);
    useEffect(() => {
      getData();
    }, []);
    const getData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setproductsList(res.data);
    };
  return (
    <>
      <div className="container">
        <div className="row">
          {productsList.map((product) => (
            <div
              className="card col-3">
              <img
                class="card-img-top"
                src={product.image}
                alt="Card image"
              />
              <div class="card-body">
                <Link to={`/products/${product.id}`}>{product.title}</Link>
                <p class="card-text">Some example text.</p>
                <button  class="btn btn-primary" onClick={()=>dispatch(setFavorite(product))}>
                 Add to Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;