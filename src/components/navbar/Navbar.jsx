import "./Navbar.css";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CategoryList from "../category/category-list/CategoryList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <Toolbar sx={{ width: "100%" }}>
            <Link to="/" title="Home">
              <IconButton size="large" color="inherit">
                <LocalMallIcon fontSize="30px" className="icon" />
              </IconButton>
            </Link>
            <div className="categories">
              <CategoryList categories={category} />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
