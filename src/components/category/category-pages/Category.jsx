import "./Category.css";
import { useEffect, useState } from "react";
import ProductList from "../../product-list/ProductList";
import { Typography, Backdrop, CircularProgress } from "@mui/material";

const Category = ({ categoryPages }) => {
  const [category, setCategory] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryPages}`
      );
      const responseData = await response.json();

      setCategory(responseData);
      setLoadingCategory(false);
    };
    sendRequest();
  }, [categoryPages, setLoadingCategory]);

  return (
    <>
      {loadingCategory ? (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loadingCategory}
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
