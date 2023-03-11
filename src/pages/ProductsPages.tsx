import { useContext } from "react";

import CreateProduct from "../components/CreateProduct";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContex } from "../context/ModalContex";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

function ProductsPages() {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContex);

  const createHandler = (product: IProduct) => {
    addProduct(product);
    close();
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {modal && (
        <Modal onClose={close} title="Create New Product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 pb-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
}

export default ProductsPages;
