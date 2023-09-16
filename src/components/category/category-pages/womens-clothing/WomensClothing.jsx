import ProductList from "../../../product-list/ProductList";
import "./WomensClothing.css";
import { useEffect, useState } from "react";

const WomensClothing = () => {
  const [womensClothing, setWomensClothing] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );

      const responseData = await response.json();
      setWomensClothing(responseData);
    };
    sendRequest();
  }, []);

  const deleteProduct = (id) => {
    setWomensClothing(womensClothing.filter((item) => item.id !== id));
  };

  return (
    <div className="womens-clothing">
      <ProductList products={womensClothing} onDelete={deleteProduct} />
    </div>
  );
};

export default WomensClothing;
