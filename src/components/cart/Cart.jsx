import "./Cart.css";
import {
  Box,
  Button,
  Drawer,
  Card,
  CardMedia,
  // CardActions,
  //   ButtonGroup,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Typography,
  AppBar,
} from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "../../shared/context/CartContext";
import { useContext, useState } from "react";

const Cart = ({ openDrawerOrder, handleCloseCart }) => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((prevItem, currItem) => {
    return prevItem + currItem.num;
  }, 0);

  const totalPrice = cartItems.reduce((prevValue, currValue) => {
    return prevValue + currValue.price * currValue.num;
  }, 0);

  const steps = ["Add To Cart", "Payment"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.value());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Drawer
      sx={{ minWidth: 450 }}
      open={openDrawerOrder}
      onClose={handleCloseCart}
    >
      {cartItems.length > 0 ? (
        <>
          <Box sx={{ width: "100%", margin: 3 }}>
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
          </Box>
          <div>
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
                  </Card>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <Typography variant="h4" sx={{ margin: 2 }}>
            Order Not Found...
          </Typography>
        </div>
      )}
    </Drawer>
  );
};

export default Cart;
