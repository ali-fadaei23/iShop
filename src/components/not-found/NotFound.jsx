import "./NotFound.css";
import NotFoundImage from "../../assets/img/404.png";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <img
          className="img-404"
          src={NotFoundImage}
          alt="Not Found Page"
          loading="lazy"
        />
        <Typography sx={{ fontSize: "x-large", color: "darkslateblue" }}>
          Oops,we can't find the page you'r looking for!
        </Typography>
      </div>
    </>
  );
};

export default NotFound;
