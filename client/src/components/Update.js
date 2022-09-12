import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props) => {
  const {id} = useParams;
  const [ title, setTitle ] = useState();
  const [ price, setPrice ] = useState();
  const [ description, setDescription ] = useState();
  const nav = useNavigate();
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/product/' + id)
      .then(res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
  })
}
