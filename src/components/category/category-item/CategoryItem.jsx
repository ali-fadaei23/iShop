import { Link } from "react-router-dom";
import "./CategoryItem.css";
import LoadingButton from "@mui/lab/LoadingButton";

const CategoryItem = ({ category }) => {
  return (
    <>
      <Link to={category} className="btn btn-category">
        <LoadingButton size="small" loadingPosition="end" variant="contained">
          <span>{category}</span>
        </LoadingButton>
      </Link>
    </>
  );
};

export default CategoryItem;
