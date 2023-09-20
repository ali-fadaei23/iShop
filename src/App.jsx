import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/main/Home";
import Navbar from "./components/navbar/Navbar";
// import Category from "./components/category/category-pages/Category";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./shared/context/CartContext";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const removeOrder = () => {
  //   count <= 0 ? setCount(null) : setCount((prevCount) => prevCount - 1);
  // };

  // const [cartItems ] = useContext(CartContext);

  return (
    <Router>
      <CartProvider>
        <>
          <div>
            <Navbar handleOpenCart={handleOpen} />
          </div>
          <Cart openDrawerOrder={open} handleCloseCart={handleClose} />

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route
              path="/electronics"
              element={
                <Category
                  numberOrder={count}
                  removeOrder={removeOrder}
                  addOrder={addOrder}
                  categoryPages={"electronics"}
                />
              }
            />
            <Route
              path="/jewelery"
              element={
                <Category
                  numberOrder={count}
                  removeOrder={removeOrder}
                  addOrder={addOrder}
                  categoryPages={"jewelery"}
                />
              }
            />
            <Route
              path="/men's clothing"
              element={
                <Category
                  numberOrder={count}
                  removeOrder={removeOrder}
                  addOrder={addOrder}
                  categoryPages={"men's clothing"}
                />
              }
            />
            <Route
              path="/women's clothing"
              element={
                <Category
                  numberOrder={count}
                  removeOrder={removeOrder}
                  addOrder={addOrder}
                  categoryPages={"women's clothing"}
                />
              }
            /> */}
          </Routes>
        </>
      </CartProvider>
    </Router>
  );
};

export default App;
