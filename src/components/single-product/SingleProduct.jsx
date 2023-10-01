import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import { CartContext } from "../../shared/context/CartContext";
import {
  ButtonGroup,
  Card,
  CardMedia,
  Button,
  CardActions,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import RemoveIcon from "@mui/icons-material/Remove";

const reducer = (...arr) => {
  const res = [];
  arr.forEach((v) => {
    const i = res.findIndex((u) => u.id === v.id);
    if (!res[i]) res.push(v);
    else res[i].num++;
  });
  return res;
};

const SingleProduct = () => {
  const [show, setShow] = useState(false);
  const { cartItems, setCartItems, setWishlist } = useContext(CartContext);
  const [singleProduct, setSingleProduct] = useState({});
  let { productId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const responseData = await response.json();
      setSingleProduct(responseData);
    })();
    // console.log(singleProduct.rating.rate);
  }, [productId, singleProduct]);

  const count = cartItems.find((v) => v.id === singleProduct.id)?.num ?? 0;
  const cart = {
    id: singleProduct.id,
    num: 1,
    category: singleProduct.category,
    image: singleProduct.image,
    title: singleProduct.title,
    price: singleProduct.price,
  };
  const addToCart = () => setCartItems((prev) => reducer(...prev, cart));

  const removeAtCart = () => {
    setCartItems((prev) => {
      const state = prev.map((v) => ({ ...v }));
      const i = state.findIndex((v) => v.id === cart.id);
      if (state[i]?.num > 1) state[i].num--;
      else if (state[i]?.num === 1) state.splice(i, 1);
      return state;
    });
  };

  const wishlistCard = {
    id: singleProduct.id,
    category: singleProduct.category,
    image: singleProduct.image,
    title: singleProduct.title,
    price: singleProduct.price,
    description: singleProduct.description,
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
    <Card className="card card-product" sx={{ marginBottom: 20 }}>
      <div>
        <IconButton onClick={addToWishlist}>
          {show ? (
            <TurnedInIcon fontSize="small" />
          ) : (
            <TurnedInNotIcon fontSize="small" />
          )}{" "}
          Wishlist
        </IconButton>
      </div>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ width: 140, height: 180 }}
        image={singleProduct.image}
        title={singleProduct.title}
      />
      <CardContent className="text">
        <Typography
          gutterBottom
          variant="caption"
          sx={{ color: "CaptionText" }}
          component="div"
        >
          {singleProduct.category}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ color: "darkblue" }}
          component="div"
        >
          {singleProduct.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {singleProduct.description}
        </Typography>
        <Typography
          gutterBottom
          variant="caption"
          sx={{ color: "tomato", marginTop: 1 }}
          component="div"
        >
          {"$ " + singleProduct.price}
        </Typography>
        {/* <Typography
          gutterBottom
          variant="caption"
          sx={{ color: "CaptionText" }}
          component="div"
        >
          {singleProduct.rating}
        </Typography> */}
      </CardContent>
      <CardActions>
        {count <= 0 ? (
          " "
        ) : (
          <ButtonGroup className="btn-add-remove">
            <Button id="reduce" aria-label="reduce" onClick={removeAtCart}>
              <RemoveIcon fontSize="small" />
            </Button>
            <div>
              <Typography sx={{ margin: 1 }}>{count}</Typography>
            </div>

            <Button id="increase" aria-label="increase" onClick={addToCart}>
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        )}
        <div className="btn-product">
          <Button
            className="btn-add"
            variant="contained"
            startIcon={<AddIcon fontSize="small" />}
            onClick={addToCart}
          >
            Buy
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
