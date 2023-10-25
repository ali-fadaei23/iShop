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
        <div className="container-loading">
          <div class="wrap">
            <div class="loading">
              <div class="bounceball"></div>
              <div class="text">NOW LOADING</div>
            </div>
          </div>
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
