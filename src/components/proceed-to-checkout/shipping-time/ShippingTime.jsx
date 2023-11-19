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
  // FormControl,
  // InputLabel,
  Radio,
  // OutlinedInput,
} from "@mui/material";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Payment from "../payment/Payment";
import { ReactComponent as AddressIcon } from "../../../assets/img/address.svg";
import { ReactComponent as TimeFrameIcon } from "../../../assets/img/time-frame.svg";

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

function UseRadioGroup({ times, timeFrame, handleChangeTimeFrame }) {
  return (
    <RadioGroup
      name="use-radio-group"
      onChange={handleChangeTimeFrame}
      defaultValue={timeFrame}
    >
      {times.map((item, index) => {
        return (
          <MyFormControlLabel
            key={index}
            value={item}
            label={item}
            control={<Radio className="radio-btn" />}
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

function BasicTabs({
  daysWeek,
  handleChangeDaySend,
  daySend,
  timeFrame,
  handleChangeTimeFrame,
  times,
}) {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={daySend}
          onChange={handleChangeDaySend}
          aria-label="basic tabs example"
        >
          {daysWeek.map((item, index) => {
            return (
              <Tab
                className="tab-time"
                key={index}
                label={item}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Box>
      {daysWeek.map((item, index) => {
        return (
          <CustomTabPanel key={index} value={daySend} index={index}>
            <UseRadioGroup
              timeFrame={timeFrame}
              handleChangeTimeFrame={handleChangeTimeFrame}
              times={times}
            />
          </CustomTabPanel>
        );
      })}
    </>
  );
}

const ShippingTime = () => {
  const timeFrame = ["9 To 13", "13 To 15", "15 To 18", "18 To 21"];
  const dWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let { userInfo } = useAuth();
  const steps = ["Shipping Time", "Payment"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [value, setValue] = useState(0);
  const [selectedTime, setSelectedTime] = useState(timeFrame[0]);

  // const [address, setAddress] = useState("");
  // const [showInputAddress, setShowInputAddress] = useState(false);
  // const handleAddress = (e) => {
  //   setAddress(e.target.value);
  // };
  // const handleInputAddress = () => {
  //   setShowInputAddress(true);
  // };

  const handleRadioButton = (e) => setSelectedTime(e.target.value);

  const handleChange = (e, newValue) => {
    setValue(newValue);
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
                <StepLabel className="step-label" {...labelProps}>
                  {label}
                </StepLabel>
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
          <div className="container-shipping-time">
            <div className="container-delivery-address">
              <Card
                sx={{
                  display: " flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  margin: "1.5rem 2rem",
                }}
              >
                <CardContent sx={{ width: "100%" }}>
                  <div className="title-shipping-time-payment title-section-address">
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.4rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Delivery Address
                    </Typography>
                    <div className="icon-title address-icon">
                      <AddressIcon />
                    </div>
                  </div>
                  <div>
                    <Typography>{`${userInfo.address.city},${userInfo.address.street},${userInfo.address.number},${userInfo.address.zipcode}`}</Typography>
                  </div>
                  {/* <div>
                    <Typography>
                      {`${userInfo.name.firstname} ${userInfo.name.lastname}`}
                    </Typography>
                  </div> 
                  {showInputAddress ? (
                    <div>
                      <FormControl sx={{ width: "280px", marginTop: "20px" }}>
                        <InputLabel
                          sx={{
                            top: "-5px",
                            fontSize: "small",
                            fontWeight: "400",
                            marginLeft: "5px",
                          }}
                          htmlFor="delivery-address"
                        >
                          Delivery Address
                        </InputLabel>
                        <OutlinedInput
                          sx={{ borderRadius: "30px" }}
                          value={address}
                          onChange={handleAddress}
                          type="text"
                          size="small"
                          margin="normal"
                          required
                          fullWidth
                          id="delivery-address"
                          label="Delivery Address"
                          color="secondary"
                          autoComplete="Delivery Address"
                          autoFocus
                        />
                      </FormControl>
                    </div>
                  ) : null} */}
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "flex-end",
                    width: "50%",
                    height: "100%",
                    marginRight: "5px",
                  }}
                >
                  {/* <div className="btn-edit-address">
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
                      className="btn-address"
                      variant="contained"
                      onClick={handleInputAddress}
                    >
                      Edit Address
                    </Button>
                  </div> */}
                </CardActions>
              </Card>
            </div>
            <div className="container-time-frame">
              <Card
                sx={{
                  display: " flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  margin: "1rem 2rem",
                }}
              >
                <CardContent>
                  <div className="title-shipping-time-payment title-section-time-frame">
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.4rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Choose A Time Frame
                    </Typography>
                    <div className="icon-title time-frame-icon">
                      <TimeFrameIcon />
                    </div>
                  </div>
                  <BasicTabs
                    daySend={value}
                    handleChangeDaySend={handleChange}
                    daysWeek={dWeek}
                    times={timeFrame}
                    handleChangeTimeFrame={handleRadioButton}
                    timeFrame={selectedTime}
                  />
                </CardContent>
              </Card>
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
                className="btn-payment"
                variant="contained"
              >
                Payment
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <Payment timeFrame={selectedTime} daySend={value} daysWeek={dWeek} />
      )}
    </>
  );
};

export default ShippingTime;
