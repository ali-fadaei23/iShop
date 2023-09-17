import "./Navbar.css";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// import Button from "@mui/material/Button";
import CategoryList from "../category/category-list/CategoryList";
import { useContext, useEffect, useState } from "react";
import LoadingContext from '../../context-api/loadingContext'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [category, setCategory] = useState([]);
  const {loadingData} = useContext()
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
