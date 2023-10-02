import ProductList from "../../product-list/ProductList";
import { Typography, Backdrop, CircularProgress } from "@mui/material";
import "./Category.css";
import { useEffect, useState } from "react";

const Category = ({ categoryPages }) => {
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryPages}`
      );
      const responseData = await response.json();
      setCategory(responseData);
      setOpen(false);
    };
    sendRequest();
  }, [categoryPages]);

  // const deleteProduct = (id) => {
  //   setCategory(category.filter((item) => item.id !== id));
  // };

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
        <div className={`${categoryPages} category-container`}>
          <Typography
            variant="h1"
            textAlign={"center"}
            sx={{ fontWeight: 900, padding: 10 }}
          >
            {categoryPages}
          </Typography>
          <div className="product">
            <ProductList products={category} />
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
