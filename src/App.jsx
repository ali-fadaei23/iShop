import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Electronics from "./components/category/category-pages/electronics/Electronics";
import Jewelery from "./components/category/category-pages/jewelery/Jewelery";
import WomensClothing from "./components/category/category-pages/womens-clothing/WomensClothing";
import MensClothing from "./components/category/category-pages/mens-clothing/MensClothing";
import Home from "./components/main/Home";

const App = () => {
  return (
    <Router>
      <>
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
      </>
    </Router>
  );
};

export default App;
