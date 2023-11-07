import "./ShippingTime.css";
import { useState } from "react";
import { useAuth } from "../../../shared/auth/AuthContext";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Tabs,
  Tab,
  FormControlLabel,
  Radio,
} from "@mui/material";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Payment from "../payment/Payment";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  value: PropTypes.any,
};

function UseRadioGroup() {
  const timeFrame = ["9 To 13", "13 To 15", "15 To 18", "18 To 21"];
  return (
    <RadioGroup name="use-radio-group" defaultValue="9 To 13">
      {timeFrame.map((item, index) => {
        return (
          <MyFormControlLabel
            key={index}
            value={item}
            label={item}
            control={<Radio />}
          />
        );
      })}
    </RadioGroup>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = useState(0);
  const dWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {dWeek.map((item, index) => {
            return <Tab key={index} label={item} {...a11yProps(index)} />;
          })}
        </Tabs>
      </Box>
      {dWeek.map((item, index) => {
        return (
          <CustomTabPanel key={index} value={value} index={index}>
            <UseRadioGroup />
          </CustomTabPanel>
        );
      })}
    </>
  );
}

const ShippingTime = () => {
  let { userId, user, userInfo } = useAuth();
  const steps = ["Shipping Time", "Payment"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

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

  return (
    <>
      <div>
        <div className="name-brand">
          <Typography
            sx={{ fontSize: " 70px", fontWeight: "bold", color: "#202020" }}
          >
            iShop
          </Typography>
        </div>
        <Stepper
          sx={{ width: "50%", margin: "0 auto" }}
          activeStep={activeStep}
        >
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
      </div>
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
      {activeStep <= 0 ? (
        <>
          <div>
            <Card>
              <CardContent>
                <div>
                  <Typography>Delivery Address</Typography>
                </div>
                <div>
                  <Typography>{`${userInfo.address.city},${userInfo.address.street},${userInfo.address.number},${userInfo.address.zipcode}`}</Typography>
                </div>
                <div>
                  <Typography>
                    {`${userInfo.name.firstname} ${userInfo.name.lastname}`}
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <div className="btn-continue-cart">
                  <Link
                    to={"checkout/shipping"}
                    style={{ textDecoration: "none" }}
                  >
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
                      Edit Address
                    </Button>
                  </Link>
                </div>
              </CardActions>
            </Card>
          </div>
          <div>
            <BasicTabs />
            <div>
              <Typography>Shipping cost: Free</Typography>
            </div>
          </div>
          <div className="btn-continue-cart">
            <Link to={"checkout/shipping"} style={{ textDecoration: "none" }}>
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
                Payment
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <Payment />
      )}
    </>
  );
};

export default ShippingTime;
