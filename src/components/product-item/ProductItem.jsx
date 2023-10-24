import "./ProductItem.css";
import { useContext, useState } from "react";
import { Context } from "../../shared/context/Context";
import { Link } from "react-router-dom";
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

const ProductItem = ({ product }) => {
  const { setWishlist } = useContext(Context);
  const [showBtn, setShowBtn] = useState(false);

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
        setShowBtn(false);
        state.splice(i, 1);
      } else {
        setShowBtn(true);
        return [...prev, wishlistCard];
      }
      return state;
    });
  };

  return (
    <Card
      className="card card-product"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "10px",
        marginBottom: "40px",
        width: 300,
      }}
    >
      <CardActionArea>
        <Link className="link-products" to={`/products/${product.id}`}>
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{
              width: 140,
              height: 180,
              objectFit: "contain",
              marginTop: "10px",
            }}
            image={product.image}
            title={product.title}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "justify",
              justifyContent: "center",
              width: "100%",
            }}
            className="text"
          >
            <Typography
              gutterBottom
              variant="caption"
              sx={{ color: "#C02819" }}
              component="div"
            >
              {product.category}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ color: "#202020" }}
              component="div"
            >
              {product.title}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              sx={{
                color: "#fff",
                backgroundColor: "#202020",
                padding: " 2px 7px",
                borderRadius: "35px",
              }}
              component="div"
            >
              {"$ " + product.price}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <button class="learn-more" onClick={addToWishlist}>
          <span class="circle" aria-hidden="true">
            {showBtn ? (
              <TurnedInIcon className="icon wishlist" fontSize="small" />
            ) : (
              <TurnedInNotIcon className="icon wishlist" fontSize="small" />
            )}
          </span>
          <span class="button-text">Learn More</span>
        </button>

        {/* <div className="btn-product">
          <IconButton
            sx={{
              fontSize: "medium",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            onClick={addToWishlist}
          >
            {" Wishlist"}
          </IconButton>
        </div> */}
      </CardActions>
    </Card>
  );
};

export default ProductItem;
