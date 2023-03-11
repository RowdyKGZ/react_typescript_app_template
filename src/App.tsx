import { useState } from "react";

import CreateProduct from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";
import { IProduct } from "./models";

function App() {
  const { loading, error, products, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IProduct) => {
    addProduct(product);
    setModal(false);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {modal && (
        <Modal onClose={() => setModal(false)} title="Create New Product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 pb-2"
        onClick={() => setModal(true)}
      >
        +
      </button>
    </div>
  );
}

export default App;
