import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const [ product, setProduct ] = useState({})
  const {id} = useParams();

}
