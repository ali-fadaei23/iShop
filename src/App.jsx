import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/main/Home";
import Navbar from "./components/navbar/Navbar";
import Electronics from "./components/category/category-pages/electronics/Electronics";
import Jewelery from "./components/category/category-pages/jewelery/Jewelery";
import WomensClothing from "./components/category/category-pages/womens-clothing/WomensClothing";
import MensClothing from "./components/category/category-pages/mens-clothing/MensClothing";
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
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/men's clothing" element={<MensClothing />} />
            <Route path="/women's clothing" element={<WomensClothing />} />
          </Routes>
        </LoadingContext.Provider>
      </>
    </Router>
  );
};

export default App;
