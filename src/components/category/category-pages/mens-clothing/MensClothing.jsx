import ProductList from "../../../product-list/ProductList";
import "./MensClothing.css";
import { useEffect, useState } from "react";

const MensClothing = () => {
  const [mensClothing, setMensClothing] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      );

      const responseData = await response.json();
      setMensClothing(responseData);
    };
    sendRequest();
  }, []);

  const deleteProduct = (id) => {
    setMensClothing(mensClothing.filter((item) => item.id !== id));
  };

  return (
    <div className="mens-clothing">
      <ProductList products={mensClothing} onDelete={deleteProduct} />
    </div>
  );
};

export default MensClothing;
