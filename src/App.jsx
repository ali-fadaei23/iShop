import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/main/Home";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/category-pages/Category";
import Cart from "./components/cart/Cart";

const App = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpenCart = () => {
    setOpen(true);
  };

  const handleCloseCart = () => {
    setOpen(false);
  };

  const handleCountOrder = () => {
    setCount(count + 1);
  };

  return (
    <Router>
      <>
        <div>
          <Navbar CountOrder={count} handleOpenCart={handleOpenCart} />
        </div>
        <Cart open={open} handleCloseCart={handleCloseCart} />

        <Routes>
          <Route path="/" element={<Home stCountOrder={handleCountOrder} />} />
          <Route
            path="/electronics"
            element={
              <Category
                stCountOrder={handleCountOrder}
                categoryPages={"electronics"}
              />
            }
          />
          <Route
            path="/jewelery"
            element={
              <Category
                stCountOrder={handleCountOrder}
                categoryPages={"jewelery"}
              />
            }
          />
          <Route
            path="/men's clothing"
            element={
              <Category
                stCountOrder={handleCountOrder}
                categoryPages={"men's clothing"}
              />
            }
          />
          <Route
            path="/women's clothing"
            element={
              <Category
                stCountOrder={handleCountOrder}
                categoryPages={"women's clothing"}
              />
            }
          />
        </Routes>
      </>
    </Router>
  );
};

export default App;
