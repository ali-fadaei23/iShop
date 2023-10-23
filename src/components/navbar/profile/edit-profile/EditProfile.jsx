import "./EditProfile.css";
import { useState } from "react";
import { useAuth } from "../../../../shared/auth/AuthContext";
import {
  Avatar,
  Typography,
  IconButton,
  Button,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
  Box,
  Grid,
  CircularProgress,
  Card,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EditIcon from "@mui/icons-material/Edit";

const EditProfile = () => {
  let auth = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState(0);
  const [zipCode, setZipCode] = useState("");

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
    setPhoneNumber(e.target.value);
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
    console.log({
      email: email,
      username: userName,
      password: password,
      phone: phoneNumber,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      address: {
        city: city,
        street: street,
        number: number,
        zipcode: zipCode,
      },
    });
  };

  return (
    <>
      <Card>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
            <Typography component="h1" variant="h5">
              Edit Profile
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <div className="form-family">
                <FormControl>
                  <InputLabel
                    className="label-input-edit"
                    htmlFor="outlined-adornment-firstname"
                  >
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    className="input-edit"
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
                  <InputLabel
                    className="label-input-edit"
                    htmlFor="outlined-adornment-lastname"
                  >
                    Last Name
                  </InputLabel>
                  <OutlinedInput
                    className="input-edit"
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
                  <InputLabel
                    className="label-input-edit"
                    htmlFor="outlined-adornment-username"
                  >
                    User Name
                  </InputLabel>
                  <OutlinedInput
                    className="input-edit"
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
                    <InputLabel
                      className="label-input-edit"
                      htmlFor="outlined-adornment-password"
                    >
                      Password
                    </InputLabel>
                    <OutlinedInput
                      className="input-edit"
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
                  <InputLabel
                    className="label-input-edit"
                    htmlFor="outlined-adornment-email"
                  >
                    Email
                  </InputLabel>
                  <OutlinedInput
                    className="input-edit"
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
                  <InputLabel
                    className="label-input-edit"
                    htmlFor="outlined-adornment-Phone-number"
                  >
                    Phone Number
                  </InputLabel>
                  <OutlinedInput
                    className="input-edit"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    id="outlined-adornment-Phone-number"
                    type="tel"
                    size="small"
                    label="Phone Number"
                    color="secondary"
                  />
                </FormControl>
              </div>
              <div className="location">
                <div className="location-row">
                  <FormControl sx={{ width: "100%", marginTop: "25px" }}>
                    <InputLabel
                      className="label-input-edit"
                      htmlFor="outlined-adornment-city"
                    >
                      City
                    </InputLabel>
                    <OutlinedInput
                      className="input-edit"
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
                    <InputLabel
                      className="label-input-edit"
                      htmlFor="outlined-adornment-street"
                    >
                      Street
                    </InputLabel>
                    <OutlinedInput
                      className="input-edit"
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
                    <InputLabel
                      className="label-input-edit"
                      htmlFor="outlined-adornment-number"
                    >
                      Number
                    </InputLabel>
                    <OutlinedInput
                      className="input-edit"
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
                    <InputLabel
                      className="label-input-edit"
                      htmlFor="outlined-adornment-zip-code"
                    >
                      ZipCode
                    </InputLabel>
                    <OutlinedInput
                      className="input-edit"
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
                sx={{
                  mt: 3,
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: "small",
                }}
                disabled={auth.loading}
                startIcon={<EditIcon fontSize="small" />}
              >
                Edit
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
          </Box>
        </Grid>
      </Card>
    </>
  );
};

export default EditProfile;
