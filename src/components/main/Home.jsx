import "./Home.css";
import { useEffect, useState } from "react";
import ProductList from "../product-list/ProductList";
// import { CartContext } from "../../shared/context/CartContext";
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

  return (
    <>
      <div className="main">
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{ fontWeight: 900, padding: 10 }}
        >
          All Products
        </Typography>
        <div className="product">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
};

export default Home;
