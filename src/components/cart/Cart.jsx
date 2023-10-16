import "./Cart.css";
import OrderNotFound from "../../assets/img/empty-cart-yellow.png";
import {
  // Box,
  Button,
  Drawer,
  Card,
  CardMedia,
  ButtonGroup,
  CardContent,
  // Stepper,
  // Step,
  // StepLabel,
  Typography,
  CardActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Context } from "../../shared/context/Context";
import { useContext } from "react";

const Cart = ({ openDrawerOrder, handleCloseCart }) => {
  const { cartItems, setCartItems } = useContext(Context);

  const totalItems = cartItems.reduce((prevItem, currItem) => {
    return prevItem + currItem.num;
  }, 0);

  const totalPrice = cartItems.reduce((prevValue, currValue) => {
    return prevValue + currValue.price * currValue.num;
  }, 0);

  // const steps = ["Add To Cart", "Payment"];
  // const [activeStep, setActiveStep] = useState(0);
  // const [skipped, setSkipped] = useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.value());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const removeAtCart = (id) => {
    setCartItems((prev) => {
      const state = prev.map((v) => ({ ...v }));
      const i = state.findIndex((v) => v.id === id);
      if (state[i]?.num > 1) state[i].num--;
      else if (state[i]?.num === 1) state.splice(i, 1);
      return state;
    });
  };

  const reducer = (...arr) => {
    const res = [];
    arr.forEach((v) => {
      const i = res.findIndex((u) => u.id === v.id);
      if (!res[i]) res.push(v);
      else res[i].num++;
    });
    return res;
  };

  const addToCart = (cart) => {
    setCartItems((prev) => reducer(...prev, cart));
  };

  return (
    <Drawer
      sx={{ minWidth: 450 }}
      open={openDrawerOrder}
      onClose={handleCloseCart}
    >
      {cartItems.length > 0 ? (
        <>
          {/* <Box sx={{ width: "100%", margin: 3 }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </Box> */}
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ color: "tomato", marginTop: 5 }}
              component="div"
            >
              Order Items: {totalItems}
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
                <div key={index} style={{ margin: "0 15px" }}>
                  <Card className="cart" sx={{ marginBottom: 20, width: 300 }}>
                    <CardMedia
                      className="img-cart"
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
                        Category: {item.category}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body1"
                        sx={{ color: "darkblue" }}
                        component="div"
                      >
                        Title: {item.title}
                      </Typography>
                      {item.category === "electronics" ? (
                        ""
                      ) : (
                        <Typography
                          gutterBottom
                          variant="body1"
                          sx={{ color: "darkblue" }}
                          component="div"
                        >
                          Size: {item.size}
                        </Typography>
                      )}

                      <Typography
                        gutterBottom
                        variant="body1"
                        sx={{ color: "darkblue" }}
                        component="div"
                      >
                        Count: {item.num}
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{ color: "tomato", marginTop: 5 }}
                        component="div"
                      >
                        Price: {item.price + " $"}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <ButtonGroup className="btn-add-remove">
                        <Button
                          id="reduce"
                          aria-label="reduce"
                          onClick={() => removeAtCart(item.id)}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <div>
                          <Typography sx={{ margin: 1 }}>{item.num}</Typography>
                        </div>

                        <Button
                          id="increase"
                          aria-label="increase"
                          onClick={() => addToCart(item)}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <img
            className="img-empty-cart"
            src={OrderNotFound}
            alt="Empty Cart"
            loading="lazy"
          />
        </div>
      )}
    </Drawer>
  );
};

export default Cart;