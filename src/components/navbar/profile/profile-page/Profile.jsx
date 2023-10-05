import { useState } from "react";
import "./Profile.css";
import {
  Card,
  CardContent,
  Avatar,
  CardActions,
  Typography,
  IconButton,
  Button,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EditIcon from "@mui/icons-material/Edit";
const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");

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

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstname: firstName,
      lastname: lastName,
      phone: phoneNumber,
      password: password,
      username: userName,
      location: location,
      email: email,
    });
  };

  return (
    <>
      <div>
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{ fontWeight: 900, padding: 5 }}
        >
          Profile
        </Typography>
      </div>
      <div className="card-profile">
        <Card>
          <div className="avatar">
            <Avatar sx={{ width: 64, height: 64, bgcolor: "steelblue" }}>
              A
            </Avatar>
            <div className="info">
              <Typography
                className="info-text"
                variant="h6"
                textAlign={"center"}
              >
                Ali
              </Typography>
              <Typography
                className="info-text"
                variant="h6"
                textAlign={"center"}
              >
                Hosseini
              </Typography>
            </div>
          </div>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div>
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-firstname">
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    // startAdornment={

                    // }
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
                  <InputLabel htmlFor="outlined-adornment-Phone-number">
                    Phone Number
                  </InputLabel>
                  <OutlinedInput
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
                <FormControl sx={{ width: "100%", marginTop: "25px" }}>
                  <InputLabel htmlFor="outlined-adornment-location">
                    Location
                  </InputLabel>
                  <OutlinedInput
                    // startAdornment={

                    // }
                    value={location}
                    onChange={handleLocation}
                    id="outlined-adornment-location"
                    type="text"
                    size="small"
                    label="Location"
                    color="secondary"
                  />
                </FormControl>
              </div>
              <Button
                type="submit"
                className="btn-update"
                variant="contained"
                startIcon={<EditIcon fontSize="small" />}
              >
                Edit
              </Button>
            </form>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </>
  );
};

export default Profile;
