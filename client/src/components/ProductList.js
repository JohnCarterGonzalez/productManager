import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../components/DeleteButton.js";

const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down
        via props by the parent component (app.js) to our child
        component (PersonList.js). Now we can easily use the getter
        and setter without having to write props.getter or props.setter every time: */

  const  [ product, setProduct ] = useState([]);

  // Gets the items that have been added by the parent (Main.js)
  useEffect(() => {
      axios.get("http://localhost:8000/api/product")
      .then((res) => setProduct(res.data));
  }, []);

  //removes the product by ID from the state, sending this method down via prop 
  const removeFromDom = productId => {
    setProduct(product.filter(product => product._id !== productId))
  }

  return (
      <div>
          <h1 className="mt-5">All Products</h1>
          <br />
          {product.map((product, index) => {
              return (
                  <div key={index}>
                      <Link to={"/product/" + product._id}>
                          Title: {product.title}
                          <br />
                          Price: {product.price}
                          <br />
                      </Link>
            <Link to={"/product/" +product._id + "/edit"}> Edit</Link>
                      <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />
                  </div>
              );
          })}
      </div>
  );
};

export default ProductList;
