import "./SignUp.css";
import PropTypes from "prop-types";
import { useState, forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { useAuth } from "../../../shared/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import AlertModal from "./alert-modal/AlertModal";
import {
  Typography,
  InputAdornment,
  TextField,
  FormHelperText,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  let navigate = useNavigate();
  let auth = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState({
    textmask: "",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState(0);
  const [zipCode, setZipCode] = useState("");

  const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });

  TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    e.preventDefault();
    setPhoneNumber({
      ...phoneNumber,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleStreet = (e) => {
    setStreet(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.handleSignUp({
      email: "John@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    });
  };

  const handleCloseModal = () => {
    auth.setOpenModal(false);
    if (auth.openModal) {
      navigate("/login");
    }
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      container
    >
      <AlertModal open={auth.openModal} close={handleCloseModal} />
      <Grid
        sx={{
          width: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "60%",
          }}
        >
          <Typography sx={{ fontSize: "60px" }} component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <div className="form-family-signup">
              <FormControl
                sx={{ width: "245px", marginTop: "20px", marginRight: "15px" }}
              >
                <InputLabel
                  sx={{ top: "-5px", fontSize: "small", fontWeight: "400" }}
                  htmlFor="outlined-adornment-firstname"
                >
                  First Name
                </InputLabel>
                <OutlinedInput
                  sx={{ borderRadius: "30px" }}
                  value={firstName}
                  onChange={handleFirstName}
                  id="outlined-adornment-firstname"
                  type="text"
                  size="small"
                  label="First Name"
                  color="secondary"
                />
              </FormControl>
              <FormControl sx={{ width: "245px", marginTop: "20px" }}>
                <InputLabel
                  sx={{ top: "-5px", fontSize: "small", fontWeight: "400" }}
                  htmlFor="outlined-adornment-lastname"
                >
                  Last Name
                </InputLabel>
                <OutlinedInput
                  sx={{ borderRadius: "30px" }}
                  value={lastName}
                  onChange={handleLastName}
                  id="outlined-adornment-lastname"
                  type="text"
                  size="small"
                  label="Last Name"
                  color="secondary"
                />
              </FormControl>
            </div>
            <div className="user-password-signup">
              <FormControl
                sx={{ width: "245px", marginTop: "20px", marginRight: "15px" }}
              >
                <InputLabel
                  sx={{
                    top: "-5px",
                    fontSize: "small",
                    fontWeight: "400",
                    marginLeft: "5px",
                  }}
                  htmlFor="outlined-adornment-username"
                >
                  User Name
                </InputLabel>
                <OutlinedInput
                  sx={{ borderRadius: "30px" }}
                  value={userName}
                  onChange={handleUserName}
                  id="outlined-adornment-username"
                  type="text"
                  size="small"
                  label="User Name"
                  color="secondary"
                />
              </FormControl>
              <FormControl sx={{ width: "245px", marginTop: "20px" }}>
                <div className="password password-profile-signup">
                  <InputLabel
                    sx={{
                      top: "-5px",
                      fontSize: "small",
                      fontWeight: "400",
                      marginLeft: "1px",
                    }}
                    htmlFor="outlined-adornment-password"
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    sx={{ borderRadius: "30px" }}
                    value={password}
                    onChange={handlePassword}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    size="small"
                    color="secondary"
                    label="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
              </FormControl>
            </div>
            <div className="email-tel-signup" style={{ marginTop: "25px" }}>
              <FormControl sx={{ width: "245px", marginRight: "15px" }}>
                <InputLabel
                  sx={{
                    top: "-5px",
                    fontSize: "small",
                    fontWeight: "400",
                    marginLeft: "5px",
                  }}
                  htmlFor="outlined-adornment-email"
                >
                  Email
                </InputLabel>
                <OutlinedInput
                  sx={{ borderRadius: "30px" }}
                  value={email}
                  onChange={handleEmail}
                  id="outlined-adornment-email"
                  type="email"
                  size="small"
                  label="Email"
                  color="secondary"
                />
                <FormHelperText> Example@gmail.com </FormHelperText>
              </FormControl>
              <FormControl
                sx={{
                  width: "245px",
                }}
              >
                <InputLabel
                  sx={{
                    top: "-5px",
                    fontSize: "small",
                    fontWeight: "400",
                    marginLeft: "5px",
                  }}
                  htmlFor="formatted-text-mask-input"
                >
                  Phone Number
                </InputLabel>
                <OutlinedInput
                  inputComponent={TextMaskCustom}
                  sx={{ borderRadius: "30px" }}
                  name="phoneNumber"
                  onChange={() => handlePhoneNumber}
                  value={phoneNumber.textmask}
                  type="tell"
                  size="small"
                  id="formatted-text-mask-input"
                  label="Phone Number"
                  color="secondary"
                />
                <FormHelperText> {"(100) 000-0000"} </FormHelperText>
              </FormControl>
            </div>
            <div className="location-signup">
              <div className="location-signup-row">
                <FormControl
                  sx={{
                    width: "245px",
                    marginTop: "25px",
                    marginRight: "15px",
                  }}
                >
                  <InputLabel
                    sx={{
                      top: "-5px",
                      fontSize: "small",
                      fontWeight: "400",
                      marginLeft: "5px",
                    }}
                    htmlFor="outlined-adornment-city"
                  >
                    City
                  </InputLabel>
                  <OutlinedInput
                    sx={{ borderRadius: "30px" }}
                    value={city}
                    onChange={handleCity}
                    id="outlined-adornment-city"
                    type="text"
                    size="small"
                    label="city"
                    color="secondary"
                  />
                </FormControl>
                <FormControl sx={{ width: "245px", marginTop: "25px" }}>
                  <InputLabel
                    sx={{
                      top: "-5px",
                      fontSize: "small",
                      fontWeight: "400",
                      marginLeft: "5px",
                    }}
                    htmlFor="outlined-adornment-street"
                  >
                    Street
                  </InputLabel>
                  <OutlinedInput
                    sx={{ borderRadius: "30px" }}
                    value={street}
                    onChange={handleStreet}
                    id="outlined-adornment-street"
                    type="text"
                    size="small"
                    label="Street"
                    color="secondary"
                  />
                </FormControl>
              </div>
              <div className="location-signup-row">
                <FormControl
                  sx={{
                    width: "245px",
                    marginTop: "20px",
                    marginRight: "15px",
                  }}
                >
                  <InputLabel
                    sx={{
                      top: "-5px",
                      fontSize: "small",
                      fontWeight: "400",
                      marginLeft: "5px",
                    }}
                    htmlFor="outlined-adornment-number"
                  >
                    Number
                  </InputLabel>
                  <OutlinedInput
                    sx={{ borderRadius: "30px" }}
                    value={number}
                    onChange={handleNumber}
                    id="outlined-adornment-number"
                    type="number"
                    size="small"
                    label="Number"
                    color="secondary"
                  />
                </FormControl>
                <FormControl sx={{ width: "245px", marginTop: "20px" }}>
                  <InputLabel
                    sx={{
                      top: "-5px",
                      fontSize: "small",
                      fontWeight: "400",
                      marginLeft: "5px",
                    }}
                    htmlFor="outlined-adornment-zip-code"
                  >
                    ZipCode
                  </InputLabel>
                  <OutlinedInput
                    sx={{ borderRadius: "30px" }}
                    value={zipCode}
                    onChange={handleZipCode}
                    id="outlined-adornment-zip-code"
                    type="text"
                    size="small"
                    label="Zip Code"
                    color="secondary"
                  />
                </FormControl>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                class="learn-more-sign-up"
                disabled={auth.loading}
              >
                <span class="circle-sign-up" aria-hidden="true">
                  {auth.loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        position: "absolute",
                      }}
                    />
                  )}
                </span>
                <span class="button-text-sign-up">Sign In</span>
              </button>
            </div>
          </Box>
        </Box>
      </Grid>
      {/* <div className="container-shop-signup">
        <div className="container-signup-img">
          <img
            className="img-shop-signup"
            src={SignUpShopImage}
            alt="Sign Up Shop"
          />
        </div>
      </div> */}
    </Grid>
  );
};

export default SignUp;
