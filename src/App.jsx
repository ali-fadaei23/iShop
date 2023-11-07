import "./App.css";
import { useState, useContext } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/main/Home";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/category-pages/Category";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";
import SingleProduct from "./components/single-product/SingleProduct";
import Profile from "./components/navbar/profile/profile-page/Profile";
import NotFound from "./components/not-found/NotFound";
import { SnackbarProvider } from "notistack";
import Footer from "./components/footer/Footer";
import PrivateRoutes from "./components/route/private-routes/PrivateRoutes";
import Login from "./components/auth-components/sign-in/Login";
import SignUp from "./components/auth-components/sign-up/SignUp";
import { useAuth } from "./shared/auth/AuthContext";
import ShippingTime from "./components/proceed-to-checkout/shipping-time/ShippingTime";

const App = () => {
  let auth = useAuth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Router basename="/iShop">
      <>
        <Navbar index handleOpenCart={handleOpen} />
        <Cart openDrawerOrder={open} handleCloseCart={handleClose} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="profile/:userId" element={<Profile />} />
            <Route path="wishlist/:userId" element={<Wishlist />} />
          </Route>
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
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
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
          <Route path="checkout/shipping-payment" element={<ShippingTime />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
