import "./Navbar.css";
import { AppBar, Box, Toolbar, IconButton, Badge } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryList from "../category/category-list/CategoryList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ CountOrder }) => {
  const [categoryItem, setCategoryItem] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const responseData = await response.json();
      console.log("asdasd", responseData);
      setCategoryItem(responseData);
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
          <Toolbar sx={{ width: "100%" }}>
            <Link to="/" title="Home">
              <IconButton size="large" color="inherit">
                <LocalMallIcon fontSize="30px" className="icon" />
              </IconButton>
            </Link>
            <Badge
              color="secondary"
              badgeContent={CountOrder}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <IconButton aria-label="cart">
                <ShoppingCartIcon className="icon" />
              </IconButton>
            </Badge>
            <div className="categories">
              <CategoryList categories={categoryItem} />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
