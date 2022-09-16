import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const Main = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product")
            .then(res => {
                setProductList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    //deletion method, takes an id as a param, then once fulfilled, displays all the products where the id does not
    //match
    const removeFromDom = (productId) => {
        axios
            .delete("http://localhost:8000/api/product/" + productId)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(productList.filter((product) => product._id !== productId));
            });
    };

    //the creation method takes the product as a body and makes a request to the url, setting it into the product array
    const createProduct = (productParam) => {
        axios
            .post("http://localhost:8000/api/product", productParam)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
            })
            .catch((err) => console.log(err));
    };

    /* PersonForm and Person List can both utilize the getter and setter established in their parent component: */
    return (
        <div>
            <ProductForm
                initialTitle="" 
                initialPrice=""
                initialDescription=""
                onSubmitProp={createProduct}
            />
            <hr />
            <ProductList product={productList} removeFromDom={removeFromDom} />
        </div>
    );
};

export default Main;
