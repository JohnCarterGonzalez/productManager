import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props) => {
  const {id} = useParams();

  const [ title, setTitle ] = useState();
  const [ price, setPrice ] = useState();
  const [ description, setDescription ] = useState();
  //so the title of the product does not change right away
  const [ headerTitle, setHeaderTitle ] = useState();

  const nav = useNavigate();
  
  //make a request to the server to get the "id"
  //once resolved set the state the response values
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setHeaderTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
        console.log(res.data.title);
      })
      .catch(err => console.log(err))
  }, []);

  //make it formal, make it nice
  const capTitle = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateProduct = (e) => {
    e.preventDefault();

    //id is the req params ands the followig obj is the req.body
    axios.put(`http://localhost:8000/api/product/${id}`, {
        title, 
        price, 
        description,
      })
      .then( res => {
        console.log(res);
        nav("/home");
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-black mt-5'>Update {capTitle(headerTitle)}</h1>
      <form onSubmit= {updateProduct} className="border-2 border-black mt-5 p-5 rounded">
        <div className="mb-6">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-black dark:text-black">Title:</label>
          <input onChange={ (e) => setTitle(e.target.value) } value={ title } name="title" type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div className="mb-6">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Price:</label>
          <input onChange={ (e) => setPrice(e.target.value) } value={ price } name="price" type="number" step="0.01" min="0" id="base-input" className="[appearance:textfield] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none" />
        </div>

        <div className='mb-6'>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description:</label>
          <textarea onChange={ (e) => setDescription(e.target.value) } value={ description } name="description" id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        </div>

        <button type="submit" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
      </form>
    </div>
  )
}

export default Update;
