import "./Payment.css";
import { useState } from "react";
import { useAuth } from "../../../shared/auth/AuthContext";
import {
  Box,
  Card,
  Button,
  Typography,
  CardActions,
  FormControlLabel,
  Radio,
  CardContent,
} from "@mui/material";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ReactComponent as CryptoIcon } from "../../../assets/img/cryptocurrency.svg";
import { ReactComponent as PaymentSpotIcon } from "../../../assets/img/payment-spot.svg";
import { ReactComponent as PaymentInternetIcon } from "../../../assets/img/payment-internet.svg";
import { ReactComponent as PaymentMethodIcon } from "../../../assets/img/payment-method.svg";

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
  return (
    <RadioGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
      name="use-radio-group"
      defaultValue="first"
    >
      <div className="radio-btn">
        <Card sx={{ width: "600px" }}>
          <div className="radio-payment internet-payment">
            <div className="img-payment img-internet-payment">
              <PaymentInternetIcon />
            </div>
            <div className="line"></div>
            <MyFormControlLabel
              value={"Internet Payment"}
              label={"Internet Payment"}
              control={<Radio />}
            />
          </div>
        </Card>
      </div>
      <div className="radio-btn">
        <Card sx={{ width: "600px" }}>
          <div className="radio-payment payment-spot">
            <div className="img-payment img-payment-spot">
              <PaymentSpotIcon />
            </div>
            <div className="line"></div>
            <MyFormControlLabel
              value="Payment On The Spot"
              label="Payment On The Spot"
              control={<Radio />}
            />
          </div>
        </Card>
      </div>
      <div className="radio-btn">
        <Card sx={{ width: "600px" }}>
          <div className="radio-payment cryptocurrency">
            <div className="img-payment img-cryptocurrency">
              <CryptoIcon />
            </div>
            <div className="line"></div>
            <MyFormControlLabel
              value="Cryptocurrency"
              label="Cryptocurrency"
              control={<Radio />}
            />
          </div>
        </Card>
      </div>
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

const Payment = () => {
  // let { userInfo } = useAuth();
  return (
    <>
      <div className="container-payment">
        <div className="payment-method">
          <div className="title-shipping-time-payment title-section-payment-method">
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.4rem",
                marginBottom: "0.5rem",
              }}
            >
              Payment Method
            </Typography>
            <div className="icon-title payment-method-icon">
              <PaymentMethodIcon />
            </div>
          </div>

          <div className="container-option-payment">
            <UseRadioGroup />
          </div>
        </div>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "20%",
          }}
        >
          <CardContent>
            <div className="container-detail-order">
              <div>
                <Typography>Total Commodity: {"15"}</Typography>
              </div>
              <div>
                <Typography>Total Price: {"200$"}</Typography>
              </div>
              <div>
                <Typography>Shipping Cost: {"Free"}</Typography>
              </div>
            </div>
          </CardContent>
          <CardActions
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
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
                  className="btn-gateway"
                  variant="contained"
                  // startIcon={
                  //   <AddShoppingCartRoundedIcon fontSize="small" />
                  // }
                  // onClick={() => addToCart()}
                >
                  Payment Gateway
                </Button>
              </Link>
            </div>
          </CardActions>
        </Card>
      </div>
      {/* <div>
        <Typography>Shipping cost: Free</Typography>
      </div> */}
    </>
  );
};

export default Payment;
