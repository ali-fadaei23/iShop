import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import "./CategoryItem.css";
import LoadingButton from "@mui/lab/LoadingButton";
import LoadingContext from "../../../context-api/loadingContext";

const CategoryItem = ({ category }) => {
  // const [loading, setLoading] = useState(false);
  const { loadingData} = useContext(LoadingContext);

  return (
    <>
      <Link to={category} className="btn btn-category">
        <LoadingButton
          size="small"
          onClick={}
          loading={loadingData}
          loadingPosition="end"
          variant="contained"
        >
          <span>{category}</span>
        </LoadingButton>
      </Link>
    </>
  );
};

export default CategoryItem;
