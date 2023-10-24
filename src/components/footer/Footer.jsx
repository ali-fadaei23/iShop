import "./Footer.css";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="box">
      <div className="box-footer">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
          maxWidth="sm"
        >
          <Typography
            sx={{ fontSize: "x-large", color: "#202020", fontWeight: "bold" }}
            variant="body1"
          >
            Designed by ali hosseiny fadaei.{" "}
            <Link className="github" to={"https://github.com/ali-fadaei23"}>
              <GitHubIcon className="github-icon" />
            </Link>
          </Typography>
          <Copyright />
        </Container>
      </div>
    </div>
  );
};

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      Shopping Site
      <Link className="link-site" to={"/"}>
        iShop
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
