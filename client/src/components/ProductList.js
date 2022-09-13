import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down
    via props by the parent component (app.js) to our child
    component (PersonList.js). Now we can easily use the getter
    and setter without having to write props.getter or props.setter every time: */

  const { removeFromDom, product, setProduct } = props;

  //sending a request to the api to delete the product, also removing it from the DOM
  const deletePerson = (productId) => {
    axios.delete('http://localhost:8000/api/product' + productId )
      .then( res => {
        removeFromDom(productId)
      })
      .catch( err => console.log(err) )
  }
  useEffect(()=> {
    axios.get('http://localhost:8000/api/product')
      .then((res) => {
        console.log(res.data); 
        setProduct(res.data);
      })
  }, [])

  return(
    <div> 
      <h1>All Products</h1>
      <br/>
      {
        product.map((product, index)=> {
          return (
            <div key={ index }>
              <p > { product.title } </p> 
              <p> { product.price }</p> 
              <Link to={ `/product/${ product._id } `}> {product.title}'s Page! </Link>
              <Link to={"/product/edit" + product._id}>Edit</Link>
              <button onClick={ (e) => {deletePerson(product._id)} }>Delete</button>
            </div>

        )})
      }
    </div>
  )
} 

export default ProductList;
