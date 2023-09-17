import { Link } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  return (
    <>
      <Link to={category} className="btn btn-category">
        <span>{category}</span>
      </Link>
    </>
  );
};

export default CategoryItem;
