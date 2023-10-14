// import { useState } from "react";
import "./Profile.css";
import {
  // Avatar,
  // Typography,
  // IconButton,
  // Button,
  // OutlinedInput,
  // InputLabel,
  // InputAdornment,
  // FormHelperText,
  // FormControl,
  // Box,
  Grid,
  // Link,
  // CircularProgress,
} from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import EditIcon from "@mui/icons-material/Edit";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useAuth } from "../../../../shared/auth/AuthContext";
import ProfileOptions from "../profile-options/ProfileOptions";

const defaultTheme = createTheme();

const Profile = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          minHeight: "570px",
        }}
        container
      >
        <div className="profile-options">
          <ProfileOptions />
        </div>
      </Grid>
    </ThemeProvider>
  );
};

export default Profile;
