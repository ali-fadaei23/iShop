import "./Home.css";
import { useEffect, useState } from "react";
import SliderShop from "../slider/Slider";
import ProductList from "../product-list/ProductList";
import { Typography, Backdrop, CircularProgress } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const responseData = await response.json();

      setProducts(responseData);
      setLoadingProduct(false);
    };
    sendRequest();
  }, [setLoadingProduct]);
  return (
    <>
      {loadingProduct ? (
        <div className="container-loading">
          <div class="wrap">
            <div class="loading">
              <div class="bounceball"></div>
              <div class="text">NOW LOADING</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main">
          <div>
            <SliderShop />
          </div>
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
      )}
    </>
  );
};

export default Home;
