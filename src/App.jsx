import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Redirect,
  // useHistory,
  // useLocation,
} from "react-router-dom";
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
import Login from "./components/auth/login/Login";
import PrivateRoute from "./components/private-routh/PrivateRoute";

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
      <Navbar index handleOpenCart={handleOpen} />
      <>
        <Cart openDrawerOrder={open} handleCloseCart={handleClose} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="profile" element={<Profile />} />
            <Route path="wishlist" element={<Wishlist />} />
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

          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
      <Footer />
    </Router>
  );
};

export default App;
