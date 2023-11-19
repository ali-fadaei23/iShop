import "./Payment.css";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../../shared/auth/AuthContext";
import { Context } from "../../../shared/context/Context";
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
import { useNavigate } from "react-router-dom";
import { ReactComponent as CryptoIcon } from "../../../assets/img/cryptocurrency.svg";
import { ReactComponent as PaymentSpotIcon } from "../../../assets/img/payment-spot.svg";
import { ReactComponent as PaymentInternetIcon } from "../../../assets/img/payment-internet.svg";
import { ReactComponent as PaymentMethodIcon } from "../../../assets/img/payment-method.svg";
import AlertModal from "../../auth-components/sign-up/alert-modal/AlertModal";

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

function UseRadioGroup({ payMethod, handlePayMethod, titleMethods }) {
  console.log(payMethod);
  return (
    <RadioGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
      name="use-radio-group"
      onChange={handlePayMethod}
    >
      {titleMethods.map((item, index) => {
        return (
          <div key={index} className="radio-btn">
            <Card sx={{ width: "600px" }}>
              <div className="radio-payment">
                <div className="img-payment">{item.icon}</div>
                <div className="line"></div>
                <MyFormControlLabel
                  value={item.title}
                  label={item.title}
                  control={<Radio className="radio-btn" />}
                />
              </div>
            </Card>
          </div>
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

const Payment = ({ timeFrame, daySend, daysWeek }) => {
  const paymentMethod = [
    { title: "Internet Payment", icon: <PaymentInternetIcon /> },
    { title: "Payment On The Spot", icon: <PaymentSpotIcon /> },
    { title: "Cryptocurrency", icon: <CryptoIcon /> },
  ];
  const [payMethod, setPayMethod] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handlePayMethod = (e) => {
    const method = paymentMethod.find((v) => v.title === e.target.value);
    setPayMethod(method);
    setDisabled(true);
  };

  const textPayment = `Since this is not a real store, the payment process in this store is simulated.
  This message indicates that your order has been successfully completed.`;
  const { cartItems, setCartItems } = useContext(Context);
  let { userInfo, setOpenModal, openModal } = useAuth();
  let navigate = useNavigate();

  const handleCloseModal = () => {
    setOpenModal(false);

    if (openModal) {
      setCartItems([]);
      navigate("/");
    }
  };

  const handleOrder = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    console.log(cartItems, "useEffect");
  }, [cartItems, setCartItems]);

  if (cartItems.length <= 0) {
    console.log(cartItems);
  }

  const totalItems = cartItems.reduce((prevItem, currItem) => {
    return prevItem + currItem.num;
  }, 0);

  const totalPrice = cartItems.reduce((prevValue, currValue) => {
    const tPrice = prevValue + currValue.price * currValue.num;
    return Math.round(tPrice * 100) / 100;
  }, 0);

  return (
    <>
      <div className="container-payment">
        <AlertModal
          text={textPayment}
          open={openModal}
          close={handleCloseModal}
          textBtn={"Forward To Home Page"}
        />
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
            <UseRadioGroup
              payMethod={payMethod}
              handlePayMethod={handlePayMethod}
              titleMethods={paymentMethod}
            />
          </div>
        </div>
        <div className="container-order-summary">
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
              height: "auto",
            }}
          >
            <CardContent sx={{ width: "100%" }}>
              <div className="container-detail-order">
                <div className="title-shipping-time-payment">
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Order Summary
                  </Typography>
                </div>
                <div className="text-order-detail">
                  {" "}
                  <Typography>{`${daysWeek[daySend]}, ${timeFrame}, ${userInfo.name.firstname} ${userInfo.name.lastname}`}</Typography>
                </div>
                <div className="text-order-detail">
                  <Typography>{`Total Commodity: ${totalItems}`}</Typography>
                </div>
                <div className="text-order-detail">
                  <Typography>{`Total Price: ${totalPrice}$`}</Typography>
                </div>
                <div className="text-order-detail">
                  <Typography>Shipping Cost: {"Free"}</Typography>
                </div>
              </div>
            </CardContent>
            <CardActions
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <div className="btn-continue-cart">
                <Button
                  disabled={!disabled}
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
                  onClick={handleOrder}
                >
                  Payment Gateway
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Payment;
