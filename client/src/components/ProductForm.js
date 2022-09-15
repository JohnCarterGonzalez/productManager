import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
    // keeping track of whiat is being typed via use State hook
    const { product, setProduct, onSubmitProp } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // handler for form submission
    const onSubmitHandler = (e) => {
        //prevent default beahivour of submit
        e.preventDefault();
        onSubmitProp({ title, price, description });
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-black mt-5">Product Manager</h1>
            <form
                onSubmit={onSubmitHandler}
                className="border-2 border-black mt-5 p-5 rounded"
            >
                <div className="mb-6">
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                        Title:
                    </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                        id="base-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        Price:
                    </label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                        step="0.01"
                        min="0"
                        id="base-input"
                        className="[appearance:textfield] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        Description:
                    </label>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        id="description"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
