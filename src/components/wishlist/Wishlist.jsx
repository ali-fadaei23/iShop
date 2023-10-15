import {
  Box,
  Card,
  CardContent,
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
      <Box>
        <Card
          sx={{
            overflow: "auto",
            height: "550px",
            margin: "0 100px",
          }}
          className="card-wishlist"
        >
          <CardContent
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {wishlist.length <= 0 ? (
              <div className="empty-wishlist">
                <img
                  className="img-empty-wishlist"
                  src={EmptyWishlist}
                  alt="Empty Wishlist"
                  loading="lazy"
                />
              </div>
            ) : (
              <>
                {wishlist.map((item, index) => {
                  return <ProductItem key={index} product={item} />;
                })}
              </>
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Wishlist;
