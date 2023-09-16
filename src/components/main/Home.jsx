import "./Home.css";
import { useEffect, useState } from "react";
import ProductList from "../product-list/ProductList";
import { Typography } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const responseData = await response.json();
      setProducts(responseData);
    };
    sendRequest();
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="main-app">
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{ fontWeight: 900, padding: 10 }}
        >
          All Products
        </Typography>
        <div className="product">
          <ProductList products={products} onDelete={deleteProduct} />
        </div>
      </div>
    </>
  );
};

export default Home;
