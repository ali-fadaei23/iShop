import "./ProductItem.css";
import { useContext, useState } from "react";
import { Context } from "../../shared/context/Context";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
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
        justifyContent: "flex-start",
        margin: "10px",
        marginBottom: "40px",
        width: 300,
        height: "auto",
      }}
    >
      <Link className="link-products" to={`/products/${product.id}`}>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{
            width: "50%",
            height: "160px",
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
            textAlign: "left",
            justifyContent: "center",
            width: "100%",
            margin: 0,
          }}
          className="text content"
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: "CaptionText", fontFamily: "Raleway" }}
            component="div"
          >
            {product.category}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            sx={{ color: "#202020", fontSize: "1.2rem" }}
            component="div"
          >
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            sx={{
              color: "#fff",
              backgroundColor: "#cc8b2b",
              padding: " 2px 7px",
              borderRadius: "35px",
              fontSize: "0.85rem",
            }}
            component="div"
          >
            {"$ " + product.price}
          </Typography>
        </CardContent>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          margin: "5px 0 0 5px",
        }}
      >
        <button onClick={addToWishlist} class="learn-more-wishlist">
          <span class="circle" aria-hidden="true">
            {showBtn ? (
              <TurnedInIcon className="icon wishlist" fontSize="small" />
            ) : (
              <TurnedInNotIcon className="icon wishlist" fontSize="small" />
            )}
          </span>
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
