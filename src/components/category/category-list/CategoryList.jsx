import { Link } from "react-router-dom";
import CategoryItem from "../category-item/CategoryItem";
import "./CategoryList.css";

const Category = ({ categories }) => {
  return (
    <>
      {categories.map((item, index) => {
        return (
          <Link to={`/${item}`}>
            <div className="category" key={index}>
              <CategoryItem category={item} />
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Category;
