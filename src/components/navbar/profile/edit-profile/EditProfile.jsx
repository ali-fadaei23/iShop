import "./EditProfile.css";
// import { useState } from "react";
import { useAuth } from "../../../../shared/auth/AuthContext";
import {
  Typography,
  // IconButton,
  // Button,
  // OutlinedInput,
  // InputLabel,
  // InputAdornment,
  // FormHelperText,
  // FormControl,
  // Box,
  // Grid,
  // CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BgProfile from "../../../../assets/img/profile_background.svg";

const EditProfile = () => {
  let { userInfo } = useAuth();
  // const [showPassword, setShowPassword] = useState(false);
  // const [password, setPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [city, setCity] = useState("");
  // const [street, setStreet] = useState("");
  // const [number, setNumber] = useState(0);
  // const [zipCode, setZipCode] = useState("");

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleFirstName = (e) => {
  //   setFirstName(e.target.value);
  // };

  // const handleLastName = (e) => {
  //   setLastName(e.target.value);
  // };

  // const handleUserName = (e) => {
  //   setUserName(e.target.value);
  // };

  // const handlePhoneNumber = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleCity = (e) => {
  //   setCity(e.target.value);
  // };

  // const handleStreet = (e) => {
  //   setStreet(e.target.value);
  // };

  // const handleNumber = (e) => {
  //   setNumber(e.target.value);
  // };

  // const handleZipCode = (e) => {
  //   setZipCode(e.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log({
  //     email: email,
  //     username: userName,
  //     password: password,
  //     phone: phoneNumber,
  //     name: {
  //       firstname: firstName,
  //       lastname: lastName,
  //     },
  //     address: {
  //       city: city,
  //       street: street,
  //       number: number,
  //       zipcode: zipCode,
  //     },
  //   });
  // };

  return (
    <>
      <div className="container-personal-info">
        <div className="bg-profile"></div>
        <Card
          sx={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            padding: "10px",
          }}
          className="card-info"
        >
          <div className="container-text-detail-info">
            <Typography sx={{ fontSize: "7rem", fontWeight: "bold" }}>
              Personal Info
            </Typography>
          </div>
          <CardContent sx={{ width: "40%" }}>
            <div>
              <Typography
                sx={{ fontSize: "1.8rem", fontWeight: "bold" }}
              >{`Detail Info`}</Typography>
            </div>
            <div className="position-detail">
              <div>
                <Typography>
                  FirstName: &nbsp; {userInfo.name.firstname}
                </Typography>
              </div>
              <div>
                <Typography>
                  LastName: &nbsp; {userInfo.name.lastname}
                </Typography>
              </div>
            </div>
            <div className="position-detail">
              <div>
                <Typography>UserName: &nbsp; {userInfo.username}</Typography>
              </div>
              <div>
                <Typography>Password: &nbsp; {userInfo.password}</Typography>
              </div>
            </div>
            <div>
              <Typography
                sx={{ fontSize: "1.8rem", fontWeight: "bold" }}
              >{`Address`}</Typography>
            </div>
            <div className="position-detail">
              <div>
                <Typography>Email: &nbsp; {userInfo.email}</Typography>
              </div>
              <div>
                <Typography>City: &nbsp; {userInfo.address.city}</Typography>
              </div>
            </div>
            <div className="position-detail">
              <div>
                <Typography>
                  Street: &nbsp; {userInfo.address.street}
                </Typography>
              </div>
              <div>
                <Typography>
                  Number: &nbsp; {userInfo.address.number}
                </Typography>
              </div>
            </div>
            <div className="position-detail">
              <div>
                <Typography>
                  ZipCode: &nbsp; {userInfo.address.zipcode}
                </Typography>
              </div>
              <div>
                <Typography>Phone: &nbsp; {userInfo.phone}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <div>
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
              <Typography sx={{ fontSize: "60px" }} component="h1" variant="h5">
                Edit Profile
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <div className="form-family">
                  <FormControl
                    sx={{
                      width: "245px",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <InputLabel
                      sx={{
                        fontSize: "small",
                        fontWeight: "400",
                      }}
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
                      sx={{ borderRadius: "30px" }}
                    />
                  </FormControl>
                  <FormControl sx={{ width: "245px", marginTop: "15px" }}>
                    <InputLabel
                      sx={{
                        fontSize: "small",
                        fontWeight: "400",
                      }}
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
                      sx={{ borderRadius: "30px" }}
                    />
                  </FormControl>
                </div>
                <div className="user-password">
                  <FormControl
                    sx={{
                      width: "245px",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <InputLabel
                      sx={{
                        fontSize: "small",
                        fontWeight: "400",
                      }}
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
                      sx={{ borderRadius: "30px" }}
                    />
                  </FormControl>
                  <FormControl sx={{ width: "245px", marginTop: "15px" }}>
                    <div className="password password-profile">
                      <InputLabel
                        sx={{
                          fontSize: "small",
                          fontWeight: "400",
                        }}
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
                        sx={{ borderRadius: "30px" }}
                        label="Password"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </div>
                  </FormControl>
                </div>
                <div className="email-phone">
                  <FormControl
                    sx={{
                      width: "245px",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <InputLabel
                      sx={{
                        fontSize: "small",
                        fontWeight: "400",
                      }}
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
                      sx={{ borderRadius: "30px" }}
                    />
                    <FormHelperText> Example@gmail.com </FormHelperText>
                  </FormControl>
                  <FormControl
                    sx={{
                      width: "245px",
                      marginTop: "15px",
                    }}
                  >
                    <InputLabel
                      sx={{
                        fontSize: "small",
                        fontWeight: "400",
                      }}
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
                      sx={{ borderRadius: "30px" }}
                    />
                  </FormControl>
                </div>
                <div className="location">
                  <div className="location-row">
                    <FormControl
                      sx={{
                        width: "245px",
                        marginTop: "15px",
                        marginRight: "15px",
                      }}
                    >
                      <InputLabel
                        sx={{
                          fontSize: "small",
                          fontWeight: "400",
                        }}
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
                        sx={{ borderRadius: "30px" }}
                      />
                    </FormControl>
                    <FormControl
                      sx={{
                        width: "245px",
                        marginTop: "15px",
                        marginRight: "15px",
                      }}
                    >
                      <InputLabel
                        sx={{
                          fontSize: "small",
                          fontWeight: "400",
                        }}
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
                        sx={{ borderRadius: "30px" }}
                      />
                    </FormControl>
                  </div>
                  <div className="location-row">
                    <FormControl
                      sx={{
                        width: "245px",
                        marginTop: "25px",
                        marginRight: "15px",
                      }}
                    >
                      <InputLabel
                        sx={{
                          fontSize: "small",
                          fontWeight: "400",
                        }}
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
                        sx={{ borderRadius: "30px" }}
                      />
                    </FormControl>
                    <FormControl
                      sx={{
                        width: "245px",
                        marginTop: "25px",
                        marginRight: "15px",
                      }}
                    >
                      <InputLabel
                        sx={{
                          fontSize: "small",
                          fontWeight: "400",
                        }}
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
                        sx={{ borderRadius: "30px" }}
                      />
                    </FormControl>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#202020",
                      height: "3rem",
                      width: " 12rem",
                      fontSize: "inherit",
                      borderRadius: "1.625rem",
                      fontWeight: "700",
                    }}
                    className="button-edit-user-info"
                    disabled={loading}
                  >
                    Edit User Info
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: "absolute",
                        }}
                      />
                    )}
                  </Button>
                </div>
              </Box>
            </Box>
          </Grid>
        </Card>
      </div> */}
    </>
  );
};

export default EditProfile;
