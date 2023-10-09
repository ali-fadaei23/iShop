import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import "./CategoryItem.css";
import { useContext } from "react";
import { Context } from "../../../shared/context/Context";

const CategoryItem = ({ category }) => {
  const { setLoading } = useContext(Context);
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Link
          to={category}
          className="btn btn-category"
        >
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
    </>
  );
};

export default CategoryItem;
