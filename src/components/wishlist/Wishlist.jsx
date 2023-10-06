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
import { Context } from "../../shared/context/Context";
import { useContext } from "react";
import ProductItem from "../product-item/ProductItem";
import EmptyWishlist from "../../assets/img/empty-wishlist.png";

const Wishlist = () => {
  const { wishlist } = useContext(Context);
  return (
    <>
      <div>
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{ fontWeight: 900, paddingTop: 10 }}
        >
          Wishlist
        </Typography>
      </div>
      <Box>
        {wishlist.length <= 0 ? (
          <div className="empty-wishlist">
            <img
              className="img-empty-wishlist"
              src={EmptyWishlist}
              alt="Empty Wishlist"
              loading="lazy"
            />
            {/* <Typography variant="h3">Your Wishlist Is Empty</Typography> */}
          </div>
        ) : (
          <>
            {wishlist.map((item, index) => {
              return <ProductItem key={index} product={item} />;
            })}
          </>
        )}
      </Box>
    </>
  );
};

export default Wishlist;
