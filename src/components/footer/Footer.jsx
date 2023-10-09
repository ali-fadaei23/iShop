import "./Footer.css";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="box footer-position">
      <div className="box-footer">
        <Container maxWidth="sm">
          <Typography variant="body1">
            Designed by ali hosseiny fadaei.{" "}
            <Link className="github" to={"https://github.com/ali-fadaei23"}>
              <GitHubIcon sx={{fontSize: "100px"}} className="github-icon" />
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
      Your Website
      <Link className="link-site" to={"/"}>
        RZR
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
