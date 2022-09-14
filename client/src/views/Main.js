import React, { useState } from "react";
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Main = (props) => {
  const [ product, setProduct ] = useState([]);

  const removeFromDom = productId => {
    setProduct(product.filter(product => product._id !== productId));
  }
  
  /* PersonForm and Person List can both utilize the getter and setter established in their parent component: */
  return (
    <div>
      <ProductForm product={ product } setProduct={ setProduct } />
      <hr/>
      <ProductList product={ product } setProduct={ setProduct } removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Main;
