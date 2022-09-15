import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [productTitle, setProductTitle] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id).then((res) => {
            setProduct(res.data);
            setProductTitle(res.data.title);
            setLoaded(true);
        });
    }, [id]);

    const updateProduct = (productParams) => {
        axios
            .put("http://localhost:8000/api/product" + id, productParams)
            .then((res) => console.log(res));
    };
    //make it formal, make it nice
    const capTitle = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <>
            <h1> Update The {capTitle(productTitle)}</h1>
            {
                loaded && 
            <ProductForm
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
            />
            }
        </>
    );
};

export default Update;
