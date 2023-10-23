import "./CategoryItem.css";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const CategoryItem = ({ category }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Link to={category} className="btn btn-categories">
          <Button
            className="btn-category-nav nav-link"
            key={category}
            sx={{
              textAlign: "center",
              display: "inline-block",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              padding: "6px",
              width: "100%",
              color: "black",
              fontSize: "1rem",
              backgroundColor: "transparent",
            }}
          >
            {category}
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default CategoryItem;
