import ProductList from "../../../product-list/ProductList";
import "./Electronics.css";
import { useEffect, useState } from "react";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );

      const responseData = await response.json();
      setElectronics(responseData);
    };
    sendRequest();
  }, []);

  const deleteProduct = (id) => {
    setElectronics(electronics.filter((item) => item.id !== id));
  };

  return (
    <div className="electronics">
      <ProductList products={electronics} onDelete={deleteProduct} />
    </div>
  );
};

export default Electronics;
