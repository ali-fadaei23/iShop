import "./Cart.css";
import { Context } from "../../shared/context/Context";
import { useContext } from "react";
import OrderNotFound from "../../assets/img/empty_cart.png";
import {
  Button,
  Drawer,
  Card,
  CardMedia,
  ButtonGroup,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = ({ openDrawerOrder, handleCloseCart }) => {
  const { cartItems, setCartItems } = useContext(Context);

  const totalItems = cartItems.reduce((prevItem, currItem) => {
    return prevItem + currItem.num;
  }, 0);

  const totalPrice = cartItems.reduce((prevValue, currValue) => {
    const tPrice = prevValue + currValue.price * currValue.num;
    return Math.round(tPrice * 100) / 100;
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

  //  <Box sx={{ width: "100%", margin: 3 }}>
  //             <Stepper activeStep={activeStep}>
  //               {steps.map((label, index) => {
  //                 const stepProps = {};
  //                 const labelProps = {};

  //                 if (isStepSkipped(index)) {
  //                   stepProps.completed = false;
  //                 }
  //                 return (
  //                   <Step key={label} {...stepProps}>
  //                     <StepLabel {...labelProps}>{label}</StepLabel>
  //                   </Step>
  //                 );
  //               })}
  //             </Stepper>
  //             {activeStep === steps.length ? (
  //               <>
  //                 <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
  //                   <Box sx={{ flex: "1 1 auto" }} />
  //                 </Box>
  //               </>
  //             ) : (
  //               <>
  //                 <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
  //                   <Button
  //                     color="inherit"
  //                     disabled={activeStep === 0}
  //                     onClick={handleBack}
  //                     sx={{ mr: 1 }}
  //                   >
  //                     Back
  //                   </Button>
  //                   <Box sx={{ flex: "1 1 auto" }} />
  //                   <Button onClick={handleNext}>
  //                     {activeStep === steps.length - 1 ? "Finish" : "Next"}
  //                   </Button>
  //                 </Box>
  //               </>
  //             )}
  //           </Box>

  const removeAtCart = (id) => {
    setCartItems((prev) => {
      const state = prev.map((v) => ({ ...v }));
      const i = state.findIndex((v) => v.id === id);
      if (state[i]?.num > 1) state[i].num--;
      else if (state[i]?.num === 1) state.splice(i, 1);
      return state;
    });
  };

  // const deleteOrder = (id) => {
  //   setCartItems((prev) => {
  //     const state = prev.map((v) => ({ ...v }));
  //     const i = state.findIndex((v) => v.id === id);
  //     if (state[i]?.num > 1) state.splice(i, 1);
  //     return state;
  //   });
  // };

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
    <>
      {cartItems.length > 0 ? (
        <Drawer
          sx={{ minWidth: 450 }}
          open={openDrawerOrder}
          onClose={handleCloseCart}
        >
          <div className="order-detail">
            <div style={{ width: "50%" }}>
              <Typography
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#202020",
                  fontSize: "large",
                  margin: 0,
                  marginTop: "15px",
                }}
                component="div"
              >
                Order Items: {totalItems}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#202020",
                  fontSize: "large",
                  margin: 0,
                  marginTop: "5px",
                  marginBottom: "15px",
                }}
                component="div"
              >
                Total Price: {totalPrice + "$"}
              </Typography>
            </div>
            <div className="btn-continue-cart">
              <Button
                sx={{
                  backgroundColor: "#202020",
                  fontWeight: "900",
                  borderRadius: "30px",
                  textAlign: "center",
                  fontSize: "medium",
                  width: "max-content",
                  height: "3rem",
                  overflow: "hidden",
                  marginRight: "20px",
                }}
                className="btn-continue"
                variant="contained"
                // startIcon={
                //   <AddShoppingCartRoundedIcon fontSize="small" />
                // }
                // onClick={() => addToCart()}
              >
                Proceed To Checkout
              </Button>
            </div>
          </div>
          <div>
            {cartItems.map((item, index) => {
              return (
                <div key={index} style={{ margin: "0 15px" }}>
                  <Card
                    className="cart"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      flexWrap: "nowrap",
                      width: "520px",
                      height: "120px",
                      margin: 0,
                      marginBottom: "20px",
                    }}
                  >
                    <div className="order-img">
                      <CardMedia
                        className="img-cart"
                        component="img"
                        alt="green iguana"
                        sx={{
                          objectFit: "contain",
                          padding: "10px",
                          width: "110px",
                        }}
                        image={item.image}
                        title={item.title}
                      />
                    </div>
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        textAlign: "left",
                        height: "100%",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="body1"
                        sx={{
                          color: "#202020",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                        component="div"
                      >
                        {item.title}
                      </Typography>
                      {item.category === "electronics" ? (
                        ""
                      ) : (
                        <Typography
                          gutterBottom
                          variant="body1"
                          sx={{
                            color: "#202020",
                            fontSize: "medium",
                            fontWeight: "bold",
                          }}
                          component="div"
                        >
                          Size: {item.size}
                        </Typography>
                      )}

                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{
                          color: "#202020",
                          fontSize: "large",
                          fontWeight: "bold",
                          margin: 0,
                        }}
                        component="div"
                      >
                        {item.price + " $"}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        width: "75%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <ButtonGroup
                        sx={{
                          fontSize: "small",
                          padding: " 5px",
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: "#202020",
                          borderRadius: "30px",
                          height: "3rem",
                          width: "9rem",
                        }}
                        className="btn-add-remove"
                      >
                        <div className="buttons-quantity">
                          <Button
                            id="reduce"
                            aria-label="reduce"
                            onClick={() => removeAtCart(item.id)}
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <div>
                            <Typography
                              sx={{ margin: "10px 16px", color: "#fff" }}
                            >
                              {item.num}
                            </Typography>
                          </div>
                          <Button
                            id="increase"
                            aria-label="increase"
                            onClick={() => addToCart(item)}
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                        </div>
                      </ButtonGroup>
                      {/* {item.num > 1 ? (
                        <Button
                          onClick={() => deleteOrder(item.id)}
                          variant="contained"
                          sx={{
                            backgroundColor: "#202020",
                            height: "3rem",
                            width: " 9rem",
                            fontSize: "small",
                            padding: " 5px",
                            borderRadius: "1.625rem",
                            flexDirection: "column",
                            marginTop: "5px",
                            fontWeight: "700",
                          }}
                          className="button-delete-cart"
                        >
                          Delete Order
                        </Button>
                      ) : null} */}

                      {/* <ButtonGroup
                        sx={{ display: "flex", alignItems: " center" }}
                        className="btn-add-remove"
                      >
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
                      </ButtonGroup> */}
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </Drawer>
      ) : (
        <Drawer
          sx={{ minWidth: 450 }}
          open={openDrawerOrder}
          onClose={handleCloseCart}
        >
          <div
            style={{ textAlign: "left", marginLeft: "20px", width: "550px" }}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#202020",
                fontSize: "large",
                margin: 0,
                marginTop: "15px",
              }}
              component="div"
            >
              Order Items: {totalItems}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#202020",
                fontSize: "large",
                margin: 0,
                marginTop: "5px",
                marginBottom: "15px",
              }}
              component="div"
            >
              Total Price: {totalPrice + "$"}
            </Typography>
          </div>
          <div className="empty-cart" style={{ height: "100%" }}>
            <Typography
              gutterBottom
              sx={{
                height: "100%",
                width: "100%",
                display: " flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "xxx-large",
                color: "#808080",
                margin: 0,
                marginTop: "5px",
                marginBottom: "15px",
              }}
              component="div"
            >
              Empty Cart!
            </Typography>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default Cart;
