import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Link to={category} className="btn btn-category">
          <Button
            key={category}
            sx={{
              my: 2,
              color: "white",
              display: "block",
            }}
          >
            {category}
          </Button>
        </Link>
      </Box>

      {/* <Link to={category} className="btn btn-category">
        <span>{category}</span>
      </Link> */}
    </>
  );
};

export default CategoryItem;
