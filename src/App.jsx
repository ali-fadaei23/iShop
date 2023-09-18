import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/main/Home";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/category-pages/Category";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCountOrder = () => {
    setCount(count + 1);
  };
  return (
    <Router>
      <>
        <div>
          <Navbar CountOrder={count} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
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
