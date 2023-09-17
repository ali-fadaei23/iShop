import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/main/Home";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/category-pages/Category";
import LoadingContext from "./context-api/loadingContext";

const App = () => {
  const [loadingData, setLoadingData] = useState(false);

  return (
    <Router>
      <>
        <LoadingContext.Provider value={{ loadingData, setLoadingData }}>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/electronics"
              element={<Category categoryPages={"electronics"} />}
            />
            <Route
              path="/jewelery"
              element={<Category categoryPages={"jewelery"} />}
            />
            <Route
              path="/men's clothing"
              element={<Category categoryPages={"men's clothing"} />}
            />
            <Route
              path="/women's clothing"
              element={<Category categoryPages={"women's clothing"} />}
            />
          </Routes>
        </LoadingContext.Provider>
      </>
    </Router>
  );
};

export default App;
