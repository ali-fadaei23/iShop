import { useState } from "react";
import "./Profile.css";
import {
  Card,
  CardContent,
  Avatar,
  CardActions,
  Typography,
  TextField,
  IconButton,
  Input,
  FilledInput,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="card-profile">
        <Card>
          <div className="avatar">
            <Avatar sx={{ width: 64, height: 64, bgcolor: "steelblue" }}>
              A
            </Avatar>
          </div>
          <CardContent>
            <form>
              <div>
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-firstname">
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    // startAdornment={

                    // }
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
            </form>
          </CardContent>
          <CardActions>ali</CardActions>
        </Card>
      </div>
    </>
  );
};

export default Profile;
