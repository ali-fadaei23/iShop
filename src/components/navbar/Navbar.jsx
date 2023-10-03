import "./Navbar.css";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  Slide,
  CssBaseline,
  useScrollTrigger,
  Fade,
  Fab,
  Button,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CategoryList from "../category/category-list/CategoryList";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../shared/context/CartContext";
import { Link } from "react-router-dom";
import ProfileList from "./profile/ProfileList";

function ScrollTop({ children, window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  // const anchor = document.getElementById("back-to-top-anchor");
  const handleClick = (e) => {
    const anchor = (e.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = ({ handleOpenCart }, props) => {
  const { cartItems, categoryItem, setCategoryItem } = useContext(CartContext);
  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const responseData = await response.json();
      setCategoryItem(responseData);
    };
    sendRequest();
  }, [setCategoryItem]);

  return (
    <>
      <Box textAlign={"center"} sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            className="navbar"
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Toolbar sx={{ width: "100%" }}>
              <Link to="/" title="Home">
                <IconButton size="large">
                  <LocalMallIcon fontSize="30px" className="icon" />
                </IconButton>
              </Link>
              <Badge
                color="secondary"
                badgeContent={cartItems.length}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <IconButton aria-label="cart" onClick={handleOpenCart}>
                  <ShoppingCartIcon className="icon" />
                </IconButton>
              </Badge>
              <ProfileList />
              <div className="categories">
                <CategoryList categories={categoryItem} />
              </div>
              <div className="login">
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  Login
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor">
          <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;
