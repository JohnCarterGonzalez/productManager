import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Main = (props) => {
  const [ product, setProduct ] = useState([]);
  
  /* PersonForm and Person List can both utilize the getter and setter established in their parent component: */
  return (
    <div>
      <ProductForm product={ product } setProduct={ setProduct } />
      <hr/>
      <ProductList product={ product } setProduct={ setProduct } />
    </div>
  )
}

export default Main;
