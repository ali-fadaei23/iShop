import { useContext, useState } from "react";
import "./ProductItem.css";
import { CartContext } from "../../shared/context/CartContext";
import {
  ButtonGroup,
  Card,
  CardMedia,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductItem = ({ product }) => {
  const { setCartItems } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const addToCart = () => {
    const cart = {
      id: product.id,
      num: count + 1,
      category: product.category,
      image: product.image,
      title: product.title,
      price: product.price,
    };

    setCount((prevCount) => prevCount + 1);

    setCartItems((currState) => {
      return [...currState, cart];
    });
  };

  const addOrder = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const removeOrder = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <Card className="card card-product" sx={{ marginBottom: 20, width: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ width: 200 }}
        image={product.image}
        title={product.title}
      />
      <CardContent className="text">
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
          sx={{ color: "CaptionText" }}
          component="div"
        >
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ color: "tomato", marginTop: 5 }}
          component="div"
        >
          {product.price + " $"}
        </Typography>
      </CardContent>
      <CardActions>
        {count <= 0 ? (
          " "
        ) : (
          <ButtonGroup>
            <Button id="reduce" aria-label="reduce" onClick={removeOrder}>
              <RemoveIcon fontSize="small" />
            </Button>
            <div>
              <Typography sx={{ margin: 1 }}>{count}</Typography>
            </div>

            <Button id="increase" aria-label="increase" onClick={addOrder}>
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        )}

        <Button
          className="btn-delete"
          variant="contained"
          color="error"
          startIcon={<AddIcon fontSize="small" />}
          onClick={addToCart}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
