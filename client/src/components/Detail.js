import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = (props) => {
  const [ product, setProduct ] = useState({})
  const {id} = useParams();
  const nav = useNavigate();

  //reach router creats a key:value poar of the props obj
  //for every vairable found inside the "path" attriubute 
  //deconstruct the id from props, the unique part of the "path" {:id} 
  //will have its value assigned in the Link element's "to" attibute 
  useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) )
    }, [id])

  const deleteHandle = () => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        nav("/home");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div> 
      <p>Title: {product.title} </p>
      <p>Price: {product.price} </p>
      <p>Description: {product.description} </p>
        <button type="submit" onCLick={deleteHandle}  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
    </div>

  )
}

export default Detail;
