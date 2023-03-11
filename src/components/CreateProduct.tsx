import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const productData: IProduct = {
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
    rating: {
      rate: 1,
      count: 10,
    },
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      setError("Plase enter valid title");
      setValue("");
      return;
    }
    productData.title = value;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products/",
      productData
    );
    onCreate(response.data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Enter Product Title"
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
}

export default CreateProduct;
