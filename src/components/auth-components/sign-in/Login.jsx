import "./Login.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../shared/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  CircularProgress,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import LoginShopImage from "../../../assets/img/login.png";

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
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      container
    >
      <div className="container-shop">
        <div className="container-shop-img">
          <img
            className="img-shop-login"
            src={LoginShopImage}
            alt="Login Shop"
          />
        </div>
      </div>
      <Grid
        sx={{
          width: "40%",
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
            width: "60%",
          }}
        >
          <Typography
            sx={{ fontSize: "60px", fontWeight: "bold" }}
            component="h1"
            variant="h5"
          >
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ width: "280px", marginTop: "20px" }}>
              <InputLabel
                sx={{
                  fontSize: "small",
                  fontWeight: "400",
                }}
                htmlFor="username"
              >
                Username
              </InputLabel>
              <OutlinedInput
                sx={{ borderRadius: "30px" }}
                value={userName}
                onChange={handleUserName}
                type="text"
                size="small"
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                color="secondary"
                autoComplete="User Name"
                autoFocus
              />
            </FormControl>
            <FormControl sx={{ width: "280px", marginTop: "20px" }}>
              <InputLabel
                sx={{
                  fontSize: "small",
                  fontWeight: "400",
                }}
                htmlFor="outlined-adornment-lastname"
              >
                Password
              </InputLabel>
              <OutlinedInput
                sx={{ borderRadius: "30px" }}
                value={password}
                onChange={handlePassword}
                id="password"
                type="password"
                size="small"
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                autoComplete="current-password"
              />
            </FormControl>

            <FormControlLabel
              sx={{ fontSize: "small", fontWeight: "400" }}
              control={
                <Checkbox value="remember" size="small" color="primary" />
              }
              label="Remember me"
            />
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
                className="button-login"
                disabled={auth.loading}
              >
                Sign In
                {auth.loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: "absolute",
                    }}
                  />
                )}
              </Button>
            </div>

            <Grid
              sx={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center;",
              }}
              container
            >
              <Grid item>
                <Link style={{ color: "#202020" }} to={"/signup"}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
