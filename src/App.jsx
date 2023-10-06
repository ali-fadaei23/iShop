import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/category-pages/Category";
import Cart from "./components/cart/Cart";
import { ContextProvider } from "./shared/context/Context";
import Wishlist from "./components/wishlist/Wishlist";
import SingleProduct from "./components/single-product/SingleProduct";
import Profile from "./components/navbar/profile/profile-page/Profile";
import { SnackbarProvider } from "notistack";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <ContextProvider>
        <Navbar handleOpenCart={handleOpen} />
        <>
          <Cart openDrawerOrder={open} handleCloseCart={handleClose} />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path={`products/:productId`}
              element={
                <SnackbarProvider autoHideDuration={2000} maxSnack={3}>
                  <SingleProduct />
                </SnackbarProvider>
              }
            />

            <Route
              path="electronics"
              element={<Category categoryPages={"electronics"} />}
            />
            <Route path="profile" element={<Profile />} />

            <Route
              path="jewelery"
              element={<Category categoryPages={"jewelery"} />}
            />

            <Route
              path="men's clothing"
              element={<Category categoryPages={"men's clothing"} />}
            />
            <Route
              path="women's clothing"
              element={<Category categoryPages={"women's clothing"} />}
            />
            <Route path="wishlist" element={<Wishlist />} />
          </Routes>
        </>
      </ContextProvider>
    </Router>
  );
};

export default App;
