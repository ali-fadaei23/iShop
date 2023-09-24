import {
  Typography,
  Box,
  // Card,
  // CardMedia,
  // CardContent,
  // CardActions,
  // Button,
  // ButtonGroup,
} from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import TurnedInIcon from "@mui/icons-material/TurnedIn";
// import RemoveIcon from "@mui/icons-material/Remove";
import "./Wishlist.css";
import { CartContext } from "../../shared/context/CartContext";
import { useContext } from "react";
import ProductItem from "../product-item/ProductItem";

const Wishlist = () => {
  const { wishlist } = useContext(CartContext);
  return (
    <>
      <div>
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{ fontWeight: 900, padding: 10 }}
        >
          Wishlist
        </Typography>
      </div>
      <Box>
        <>
          {wishlist.map((item) => {
            return <ProductItem product={item} />;
          })}
        </>
      </Box>
    </>
  );
};

export default Wishlist;
