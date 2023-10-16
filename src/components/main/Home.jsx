import "./Home.css";
import { useEffect, useState } from "react";
import ProductList from "../product-list/ProductList";
// import { Context } from "../../shared/context/Context";
import { Typography, Backdrop, CircularProgress } from "@mui/material";
import Slider from "../slider/Slider";
import SliderShop from "../slider/Slider";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);

  useEffect(() => {
    // setLoadingProduct(true);
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
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loadingProduct}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
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
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default Home;
