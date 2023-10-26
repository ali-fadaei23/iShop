import { useEffect } from "react";
import "./NotFound.css";
// import NotFoundImage from "../../assets/img/404.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  const randomNum = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

  useEffect(() => {
    let loop1,
      loop2,
      loop3,
      time = 30,
      i = 0,
      selector3 = document.querySelector(".numberThree"),
      selector2 = document.querySelector(".numberTwo"),
      selector1 = document.querySelector(".numberOne");

    loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        selector3.textContent = 4;
      } else {
        selector3.textContent = randomNum();
        i++;
      }
    }, time);

    loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        selector2.textContent = 0;
      } else {
        selector2.textContent = randomNum();
        i++;
      }
    }, time);

    loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        selector1.textContent = 4;
      } else {
        selector1.textContent = randomNum();
        i++;
      }
    }, time);
  }, []);

  return (
    <>
      <div class="error">
        <div class="container-floud">
          <div class="col-xs-12 ground-color text-center">
            <div class="errorPage">
              <div class="clip">
                <div class="shadow">
                  <span class="digit numberThree"></span>
                </div>
              </div>
              <div class="clip">
                <div class="shadow">
                  <span class="digit numberTwo"></span>
                </div>
              </div>
              <div class="clip">
                <div class="shadow">
                  <span class="digit numberOne"></span>
                </div>
              </div>
            </div>
            <h2>
              Oops ! Page not found
              <br />
              That's an error
            </h2>
            <div>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="h6"
              >
                This is wrong. This page does no longer exist, or it never had.{" "}
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link class="back-home" to={"/"}>
            <span class="button-text-back-home">Go Back Home</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
