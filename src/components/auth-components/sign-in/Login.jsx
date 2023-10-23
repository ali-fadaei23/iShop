import "./Login.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../shared/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="slateblue" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Login = () => {
  let navigate = useNavigate();
  let auth = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.handleLogin(userName, password);
  };

  useEffect(() => {
    if (auth.user && !auth.loading) {
      navigate("/");
    }
  }, [auth.user, auth.loading, navigate]);

  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }} container>
      <Grid
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              size="small"
              value={userName}
              onChange={handleUserName}
              margin="normal"
              required
              fullWidth
              id="username"
              type="text"
              label="User Name"
              name="username"
              autoComplete="User Name"
              autoFocus
            />
            <TextField
              size="small"
              value={password}
              onChange={handlePassword}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              sx={{ fontSize: "small", fontWeight: "400" }}
              control={
                <Checkbox value="remember" size="small" color="primary" />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              disabled={auth.loading}
            >
              Accept terms
              {auth.loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                  }}
                />
              )}
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to={"/login"}>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to={"/signup"}>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
