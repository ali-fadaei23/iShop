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
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import PaymentInternet from "../../../assets/img/payment-internet.svg";
import Cryptocurrency from "../../../assets/img/cryptocurrency.svg";
import PaymentSpot from "../../../assets/img/payment-spot.svg";

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
    <RadioGroup name="use-radio-group" defaultValue="first">
      <div className="radio-btn">
        <div className="radio-payment internet-payment">
          <MyFormControlLabel
            value={"Internet Payment"}
            label={"Internet Payment"}
            control={<Radio />}
          />
          <div>
            <img width={48} src={PaymentInternet} alt="payment" />
          </div>
        </div>
      </div>
      <div className="radio-btn">
        <div className="radio-payment payment-spot">
          <MyFormControlLabel
            value="Payment On The Spot"
            label="Payment On The Spot"
            control={<Radio />}
          />
          <div>
            <img width={48} src={PaymentSpot} alt="payment" />
          </div>
        </div>
      </div>
      <div className="radio-btn">
        <div className="radio-payment cryptocurrency">
          <MyFormControlLabel
            value="Cryptocurrency"
            label="Cryptocurrency"
            control={<Radio />}
          />
          <div>
            <img width={48} src={Cryptocurrency} alt="payment" />
          </div>
        </div>
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
          <div>
            <Typography>Payment Method</Typography>
          </div>

          <Card>
            <CardActions>
              <div>
                <UseRadioGroup />
              </div>
            </CardActions>
          </Card>
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
                  className="btn-continue"
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