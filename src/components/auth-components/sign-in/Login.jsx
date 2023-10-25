import "./Login.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../shared/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import LoginShopImage from "../../../assets/img/login.png";
// import ShopImage from "../../../assets/img/alice.png";

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
          <Typography sx={{ fontSize: "60px" }} component="h1" variant="h5">
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
              sx={{ borderRadius: "30px" }}
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                class="learn-more-login"
                disabled={auth.loading}
              >
                <span class="circle-login" aria-hidden="true">
                  {auth.loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        position: "absolute",
                      }}
                    />
                  )}
                </span>
                <span class="button-text-login">Sign In</span>
              </button>
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
