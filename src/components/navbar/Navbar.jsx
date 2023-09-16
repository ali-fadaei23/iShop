import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import CategoryList from "../category/category-list/CategoryList";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const responseData = await response.json();
      setCategory(responseData);
    };
    sendRequest();
  }, []);

  return (
    <>
      <Box textAlign={"center"} sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Toolbar>
            <CategoryList categories={category} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
