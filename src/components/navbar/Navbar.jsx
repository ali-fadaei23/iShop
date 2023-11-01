import "./Navbar.css";
import { useEffect, useContext } from "react";
import { Context } from "../../shared/context/Context";
import { Link } from "react-router-dom";
import { useAuth } from "../../shared/auth/AuthContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryList from "../category/category-list/CategoryList";
import ProfileList from "./profile/profile-list/ProfileList";
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
import Logo from "../../assets/img/logo.png";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function ScrollTop({ children, window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

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

const HideOnScroll = ({ children, window }, props) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
      <Toolbar id="back-to-top-anchor">
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Toolbar>
    </>
  );
};

const Navbar = ({ handleOpenCart }, props) => {
  let auth = useAuth();
  const { cartItems, categoryItem, setCategoryItem } = useContext(Context);

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
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          className="navbar"
          color="inherit"
          sx={{
            display: "flex",
            alignItems: "center",
            zIndex: 1,
            height: "70px",
          }}
        >
          <Toolbar sx={{ width: "100%" }}>
            <div className="container-main-logo">
              <Link to={"/"} title="Home">
                {/* <LocalMallIcon fontSize="30px" className="icon" /> */}
                <img src={Logo} alt="Logo" className="logo" />
              </Link>
            </div>
            <div className="categories">
              <CategoryList categories={categoryItem} />
            </div>

            {auth.user ? (
              <ProfileList />
            ) : (
              <div className="login">
                <Link style={{ textDecoration: "none" }} to={"/login"}>
                  <Button
                    className="btn-login"
                    sx={{
                      textAlign: "center",
                      display: "inline-block",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      padding: "6px",
                      width: "100%",
                      color: "#202020",
                      fontSize: "1rem",
                      backgroundColor: "transparent",
                    }}
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
            {cartItems.length > 0 ? (
              <Badge
                color="secondary"
                badgeContent={cartItems.length}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <IconButton
                  className="cart-btn"
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: 0,
                    marginLeft: "10px"
                  }}
                  aria-label="cart"
                  onClick={handleOpenCart}
                >
                  <ShoppingCartRoundedIcon
                    sx={{ color: "#cc8b2b" }}
                    className="icon cart-icon"
                    fontSize="medium"
                  />
                </IconButton>
              </Badge>
            ) : null}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
