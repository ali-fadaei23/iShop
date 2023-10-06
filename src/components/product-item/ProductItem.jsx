import { useContext, useState } from "react";
import "./ProductItem.css";
import { Context } from "../../shared/context/Context";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
} from "@mui/material";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { setWishlist } = useContext(Context);
  const [show, setShow] = useState(false);

  // Wishlist
  const wishlistCard = {
    id: product.id,
    category: product.category,
    image: product.image,
    title: product.title,
    price: product.price,
    description: product.description,
  };

  const addToWishlist = () => {
    setWishlist((prev) => {
      const state = prev.map((u) => ({ ...u }));
      const i = state.findIndex((v) => v.id === wishlistCard.id);
      if (state[i]?.id === wishlistCard.id) {
        setShow(false);
        state.splice(i, 1);
      } else {
        setShow(true);
        return [...prev, wishlistCard];
      }
      return state;
    });
  };

  return (
    <Card
      className="card card-product"
      sx={{ marginBottom: 20, width: 300}}
    >
      <CardActionArea>
        <Link className="link-products" to={`/products/${product.id}`}>
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: 140, height: 180 }}
            image={product.image}
            title={product.title}
          />
          <CardContent className="text">
            <Typography
              gutterBottom
              variant="caption"
              sx={{ color: "CaptionText" }}
              component="div"
            >
              {product.category}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ color: "darkblue" }}
              component="div"
            >
              {product.title}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              sx={{ color: "tomato", marginTop: 1 }}
              component="div"
            >
              {"$ " + product.price}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <div className="btn-product">
          <IconButton onClick={addToWishlist}>
            {show ? (
              <TurnedInIcon fontSize="small" />
            ) : (
              <TurnedInNotIcon fontSize="small" />
            )}
            {" Wishlist"}
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
