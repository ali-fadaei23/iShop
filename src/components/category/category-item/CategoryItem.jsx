import "./CategoryItem.css";
import CategoryIcon from "@mui/icons-material/Category";
import { Button } from "@mui/material";

const CategoryItem = ({ category }) => {
  return (
    <>
      <Button
        className="btn btn-category"
        size="large"
        startIcon={<CategoryIcon />}
        variant="contained"
      >
        {category}
      </Button>
    </>
  );
};

export default CategoryItem;
