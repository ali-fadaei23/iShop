import "./Home.css";
import { useEffect, useState } from "react";
import ProductList from "../product-list/ProductList";
// import { CartContext } from "../../shared/context/CartContext";
import { Typography, Backdrop, CircularProgress } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const responseData = await response.json();
      setProducts(responseData);
      setOpen(false);
    };
    sendRequest();
  }, []);

  return (
    <>
      {open ? (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Home;
