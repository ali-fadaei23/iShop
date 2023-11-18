import {
  Card,
  CardContent,
  TextField,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
  Typography,
} from "@mui/material";
import { ReactComponent as CopyIcon } from "../../assets/img/copy-icon.svg";

import "./CopyToClipboard.css";
import { useState } from "react";

const CopyToClipboard = () => {
  const textHint = `Use the following username and password to log in:`;
  const hintLogin = { username: "johnd", password: "m38rmF$" };

  const [copyUser, setCopyUser] = useState(false);
  const [copyPass, setCopyPass] = useState(false);

  const copyUserName = () => {
    navigator.clipboard.writeText(hintLogin.username);
    setCopyUser(true);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(hintLogin.password);
    setCopyPass(true);
  };
  return (
    <div className="container-clipboard">
      <Card
        sx={{
          width: "30%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "3rem",
          padding: "0.9rem",
        }}
      >
        <div style={{ width: "100%" }}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Hint!
          </Typography>
        </div>
        <div style={{ width: "100%" }}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {textHint}
          </Typography>
        </div>
        <CardContent>
          <div>
            <FormControl
              sx={{ width: "280px", marginTop: "20px" }}
              variant="outlined"
            >
              <InputLabel
                sx={{
                  fontSize: "small",
                  fontWeight: "400",
                }}
                htmlFor="outlined-adornment-username"
              >
                User Name
              </InputLabel>
              <OutlinedInput
                readOnly
                sx={{ borderRadius: "30px" }}
                size="small"
                id="outlined-adornment-username"
                type="text"
                // defaultValue=""
                defaultValue={hintLogin.username}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ marginRight: 0 }}
                      aria-label="toggle username visibility"
                      onClick={copyUserName}
                      edge="end"
                    >
                      {copyUser ? (
                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                          Copied
                        </span>
                      ) : (
                        <CopyIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="User Name"
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              sx={{ width: "280px", marginTop: "20px" }}
              variant="outlined"
            >
              <InputLabel
                sx={{
                  fontSize: "small",
                  fontWeight: "400",
                }}
                htmlFor="outlined-adornment-password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                readOnly
                sx={{ borderRadius: "30px" }}
                size="small"
                id="outlined-adornment-password"
                type="text"
                defaultValue={hintLogin.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ marginRight: 0 }}
                      aria-label="toggle password visibility"
                      onClick={copyPassword}
                      edge="end"
                    >
                      {copyPass ? (
                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                          Copied
                        </span>
                      ) : (
                        <CopyIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CopyToClipboard;
