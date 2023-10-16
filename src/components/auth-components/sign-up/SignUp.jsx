import "./SignUp.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Typography,
  Avatar,
  Button,
  InputAdornment,
  TextField,
  FormHelperText,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Link,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useState, forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { useAuth } from "../../../shared/auth/AuthContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AlertModal from "./alert-modal/AlertModal";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const defaultTheme = createTheme();

const SignUp = () => {
  let navigate = useNavigate();
  let auth = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState({
    textmask: "2134124124",
  });
  const [firstName, setFirstName] = useState("1123123123");
  const [lastName, setLastName] = useState("123123123");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("123123123");
  const [city, setCity] = useState("123123");
  const [street, setStreet] = useState("33333");
  const [number, setNumber] = useState(0);
  const [zipCode, setZipCode] = useState("23123123123");

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
    <ThemeProvider theme={defaultTheme}>
      <Grid container>
        <AlertModal open={auth.openModal} close={handleCloseModal} />
        <Grid
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <div className="form-family">
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-firstname">
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    value={firstName}
                    onChange={handleFirstName}
                    id="outlined-adornment-firstname"
                    type="text"
                    size="small"
                    label="First Name"
                    color="secondary"
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-lastname">
                    Last Name
                  </InputLabel>
                  <OutlinedInput
                    // startAdornment={
                    // }
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
              <div className="user-password">
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-username">
                    User Name
                  </InputLabel>
                  <OutlinedInput
                    // startAdornment={
                    // }
                    value={userName}
                    onChange={handleUserName}
                    id="outlined-adornment-username"
                    type="text"
                    size="small"
                    label="User Name"
                    color="secondary"
                  />
                </FormControl>
                <FormControl>
                  <div className="password password-profile">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      //   startAdornment={
                      //   }
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
              <div style={{ marginTop: "25px" }}>
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-email">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    // startAdornment={
                    // }
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
                <FormControl>
                  <FormControl variant="standard">
                    <TextField
                      size="small"
                      InputProps={{ inputComponent: TextMaskCustom }}
                      name="phoneNumber"
                      onChange={() => handlePhoneNumber}
                      value={phoneNumber.textmask}
                      id="formatted-text-mask-input"
                      label="Phone Number"
                      variant="outlined"
                      helperText="(100) 000-0000"
                    />
                  </FormControl>
                </FormControl>
              </div>
              <div className="location">
                <div className="location-row">
                  <FormControl sx={{ width: "100%", marginTop: "25px" }}>
                    <InputLabel htmlFor="outlined-adornment-city">
                      City
                    </InputLabel>
                    <OutlinedInput
                      // startAdornment={
                      // }
                      value={city}
                      onChange={handleCity}
                      id="outlined-adornment-city"
                      type="text"
                      size="small"
                      label="city"
                      color="secondary"
                    />
                  </FormControl>
                  <FormControl sx={{ width: "100%", marginTop: "25px" }}>
                    <InputLabel htmlFor="outlined-adornment-street">
                      Street
                    </InputLabel>
                    <OutlinedInput
                      // startAdornment={
                      // }
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
                <div className="location-row">
                  <FormControl sx={{ width: "100%", marginTop: "25px" }}>
                    <InputLabel htmlFor="outlined-adornment-number">
                      Number
                    </InputLabel>
                    <OutlinedInput
                      // startAdornment={
                      // }
                      value={number}
                      onChange={handleNumber}
                      id="outlined-adornment-number"
                      type="number"
                      size="small"
                      label="Number"
                      color="secondary"
                    />
                  </FormControl>
                  <FormControl sx={{ width: "100%", marginTop: "25px" }}>
                    <InputLabel htmlFor="outlined-adornment-zip-code">
                      ZipCode
                    </InputLabel>
                    <OutlinedInput
                      // startAdornment={
                      // }
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
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                disabled={auth.loading}
                startIcon={<EditIcon fontSize="small" />}
              >
                Sign Up
                {auth.loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: "absolute",
                    }}
                  />
                )}
              </Button>
            </Box>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
