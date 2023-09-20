import "./Cart.css";
import {
  Button,
  Drawer,
  Typography,
  Card,
  CardMedia,
  CardActions,
  //   ButtonGroup,
  CardContent,
} from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "../../shared/context/CartContext";
import { useContext } from "react";

const Cart = ({ openDrawerOrder, handleCloseCart }) => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((prevValue, currValue) => {
    return prevValue + currValue.price;
  }, 0);

  console.log(cartItems);
  return (
    <Drawer
      sx={{ maxWidth: 350 }}
      open={openDrawerOrder}
      onClose={handleCloseCart}
    >
      <Button onClick={handleCloseCart}>Remove</Button>
      <div>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ color: "tomato", marginTop: 5 }}
          component="div"
        >
          Order Items: {cartItems.length}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ color: "tomato", marginTop: 5 }}
          component="div"
        >
          Total Price: {totalPrice + "$"}
        </Typography>
      </div>
      <div>
        {cartItems.map((item, index) => {
          return (
            <div key={index}>
              <Card
                className="card card-product"
                sx={{ marginBottom: 20, width: 300 }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  sx={{ width: 200 }}
                  image={item.image}
                  title={item.title}
                />
                <CardContent className="text">
                  <Typography
                    gutterBottom
                    variant="caption"
                    sx={{ color: "darkblue" }}
                    component="div"
                  >
                    {item.category}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{ color: "darkblue" }}
                    component="div"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{ color: "darkblue" }}
                    component="div"
                  >
                    {item.num}
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ color: "tomato", marginTop: 5 }}
                    component="div"
                  >
                    {item.price + " $"}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* {numberOrder <= 0 ? (
                "Not Found "
              ) : (
                <ButtonGroup>
                  <Button id="reduce" aria-label="reduce" onClick={removeOrder}>
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <div>
                    <Typography sx={{ margin: 1 }}>{numberOrder}</Typography>
                  </div>
  
                  <Button id="increase" aria-label="increase" onClick={addOrder}>
                    <AddIcon fontSize="small" />
                  </Button>
                  </ButtonGroup>
                )} */}
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </Drawer>
  );
};

export default Cart;
