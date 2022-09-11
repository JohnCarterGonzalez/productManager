import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down
    via props by the parent component (app.js) to our child
    component (PersonList.js). Now we can easily use the getter
    and setter without having to write props.getter or props.setter every time: */

  const { product, setProduct } = props;

  useEffect(()=> {
    axios.get('http://localhost:8000/api/people')
      .then((res) => {
        console.log(res.data); 
        setProduct(res.data);
      })
  }, [])

  return(
    <div> 
      {
        product.map((product, index)=> {
          return (
            <div key={ index }>
              <p > { product.title } </p> 
              <p> { product.price }</p> 
              <Link to={ `/people/${ product.id } `}> {product.title}'s Page! </Link>
            </div>

        )})
      }
    </div>
  )
} 

export default ProductList;
