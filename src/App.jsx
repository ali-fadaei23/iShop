import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/category-pages/Category";

const App = () => {
  return (
    <Router>
      <>
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
      </>
    </Router>
  );
};

export default App;
