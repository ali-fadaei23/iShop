import ProductList from "../../../product-list/ProductList";
import { Typography } from "@mui/material";
import "./Electronics.css";
import { useEffect, useState } from "react";

const Electronics = ({ categoryPages }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryPages}`
      );
      const responseData = await response.json();
      setCategory(responseData);
    };
    sendRequest();
  }, [categoryPages]);

  const deleteProduct = (id) => {
    setCategory(category.filter((item) => item.id !== id));
  };

  return (
    <div className={`${categoryPages}`}>
      <Typography
        variant="h1"
        textAlign={"center"}
        sx={{ fontWeight: 900, padding: 10 }}
      >
        {categoryPages}
      </Typography>
      <div className="product">
        <ProductList products={category} onDelete={deleteProduct} />
      </div>
    </div>
  );
};

export default Electronics;
