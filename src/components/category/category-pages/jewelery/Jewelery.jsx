import ProductList from "../../../product-list/ProductList";
import "./Jewelery.css";
import { useEffect, useState } from "react";

const Jewelery = () => {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );

      const responseData = await response.json();
      setJewelery(responseData);
    };
    sendRequest();
  }, []);

  const deleteProduct = (id) => {
    setJewelery(jewelery.filter((item) => item.id !== id));
  };

  return (
    <div className="jewelery">
      <ProductList products={jewelery} onDelete={deleteProduct} />
    </div>
  );
};

export default Jewelery;
