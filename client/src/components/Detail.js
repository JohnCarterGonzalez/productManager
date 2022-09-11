import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const [ product, setProduct ] = useState({})
  const {id} = useParams();

  //reach router creats a key:value poar of the props obj
  //for every vairable found inside the "path" attriubute 
  //deconstruct the id from props, the unique part of the "path" {:id} 
  //will have its value assigned in the Link element's "to" attibute 
  useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
  return (
    <div> 
      <p>Title: {product.title} </p>
      <p>Price: {product.price} </p>
      <p>Description: {product.description} </p>
    </div>

  )
}

export default Detail;
