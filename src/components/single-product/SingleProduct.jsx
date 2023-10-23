import "./SingleProduct.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../shared/context/Context";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useAuth } from "../../shared/auth/AuthContext";
import {
  ButtonGroup,
  Card,
  CardMedia,
  Button,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Rating,
  Stack,
  Backdrop,
  CircularProgress,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import RemoveIcon from "@mui/icons-material/Remove";

const reducer = (...arr) => {
  const res = [];
  arr.forEach((v) => {
    const i = res.findIndex((u) => u.id === v.id);
    if (!res[i]) res.push(v);
    else res[i].num++;
  });
  return res;
};

const SingleProduct = () => {
  let auth = useAuth();
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const { cartItems, setCartItems, setWishlist } = useContext(Context);
  const [singleProduct, setSingleProduct] = useState({});
  const [size, setSize] = useState("S");
  let { productId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const responseData = await response.json();

      setSingleProduct(responseData);
      setLoading(false);
    })();
  }, [productId, singleProduct]);

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const count = cartItems.find((v) => v.id === singleProduct.id)?.num ?? 0;

  const cart = {
    id: singleProduct.id,
    num: 1,
    size: size,
    category: singleProduct.category,
    image: singleProduct.image,
    title: singleProduct.title,
    price: singleProduct.price,
    count: count,
  };

  const addToCart = (variant) => {
    if (auth.user && size) {
      setCartItems((prev) => reducer(...prev, cart));
    } else if (!size && singleProduct.category !== "electronics") {
      enqueueSnackbar("Please select a size!", { variant });
    } else if (auth.user && singleProduct.category === "electronics") {
      setCartItems((prev) => reducer(...prev, cart));
    } else {
      enqueueSnackbar("You must log in!", { variant });
    }
  };

  const removeAtCart = () => {
    setCartItems((prev) => {
      const state = prev.map((v) => ({ ...v }));
      const i = state.findIndex((v) => v.id === cart.id);
      if (state[i]?.num > 1) state[i].num--;
      else if (state[i]?.num === 1) state.splice(i, 1);
      return state;
    });
  };

  const wishlistCard = {
    id: singleProduct.id,
    category: singleProduct.category,
    image: singleProduct.image,
    title: singleProduct.title,
    price: singleProduct.price,
    description: singleProduct.description,
  };

  const addToWishlist = () => {
    setWishlist((prev) => {
      const state = prev.map((u) => ({ ...u }));
      const i = state.findIndex((v) => v.id === wishlistCard.id);
      if (state[i]?.id === wishlistCard.id) {
        setShowBtn(false);
        state.splice(i, 1);
      } else {
        setShowBtn(true);
        return [...prev, wishlistCard];
      }
      return state;
    });
  };

  return (
    <>
      {loading ? (
        <div>
          <Backdrop sx={{ color: "#fff" }} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
        <div className="container-card">
          <Card
            className="card card-product"
            sx={{
              marginBottom: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "70%",
            }}
          >
            <div className="btn-wishlist">
              <IconButton onClick={addToWishlist}>
                {showBtn ? (
                  <TurnedInIcon fontSize="small" />
                ) : (
                  <TurnedInNotIcon fontSize="small" />
                )}
              </IconButton>
            </div>
            <CardContent className="text">
              <div className="detail-product">
                <div className="datail-img">
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{
                      objectFit: "contain",
                      padding: "10px",
                      width: "220px",
                    }}
                    image={singleProduct.image}
                    title={singleProduct.title}
                  />
                </div>
                <div className="datail-text">
                  <Typography
                    gutterBottom
                    variant="caption"
                    sx={{ color: "CaptionText" }}
                    component="div"
                  >
                    {singleProduct.category}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{
                      fontSize: "large",
                      fontWeight: "bold",
                      color: "royalblue",
                    }}
                    component="div"
                  >
                    {singleProduct.title}
                  </Typography>
                  {singleProduct.category === "electronics" ? null : (
                    <div>
                      <FormControl
                        sx={{ minWidth: 120, marginLeft: 0, marginTop: "30px" }}
                      >
                        <>
                          <InputLabel id="demo-simple-select-helper-label">
                            Size
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={size}
                            label="Size"
                            onChange={handleSize}
                            size="small"
                          >
                            <MenuItem value={"S"}>S</MenuItem>
                            <MenuItem value={"M"}>M</MenuItem>
                            <MenuItem value={"L"}>L</MenuItem>
                            <MenuItem value={"XL"}>XL</MenuItem>
                          </Select>
                        </>
                      </FormControl>
                    </div>
                  )}
                </div>
              </div>
              <div className="description">
                <Typography variant="body2" color="text.secondary">
                  {singleProduct.description}
                </Typography>
              </div>
              <div className="rating-container">
                <Typography
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    fontSize: "small",
                    color: "royalblue",
                  }}
                  component="div"
                >
                  Rating:
                </Typography>

                <div className="rating">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      value={
                        singleProduct.rating === undefined
                          ? 0
                          : singleProduct.rating["rate"]
                      }
                      precision={0.1}
                      readOnly
                    />
                  </Stack>
                  <Typography
                    className="rate rate-text"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      fontSize: "small",
                      color: "royalblue",
                      marginLeft: "10px",
                    }}
                    component="div"
                  >
                    {singleProduct.rating === undefined
                      ? 0
                      : singleProduct.rating["rate"]}
                  </Typography>
                  <Typography
                    className="rate count"
                    gutterBottom
                    sx={{
                      marginLeft: "5px",
                      fontWeight: "bold",
                      fontSize: "small",
                      color: "royalblue",
                    }}
                    component="div"
                  >
                    ({" "}
                    {singleProduct.rating === undefined
                      ? 0
                      : singleProduct.rating["count"]}
                    {" user "})
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h2"
                sx={{
                  color: "royalblue",
                  width: "100%",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontWeight: "bold",
                }}
                component="span"
              >
                {"$ " + singleProduct.price}
              </Typography>
              {count <= 0 ? (
                <div className="btn-product">
                  <Button
                    sx={{
                      backgroundColor: "slateblue",
                      fontWeight: "900",
                      textAlign: "center",
                      fontSize: "x-small",
                      width: "100px",
                      height: "40px",
                      overflow: "hidden",
                    }}
                    className="btn-add"
                    variant="contained"
                    startIcon={<AddIcon fontSize="small" />}
                    onClick={() => addToCart("error")}
                  >
                    Buy
                  </Button>
                </div>
              ) : (
                <ButtonGroup
                  sx={{
                    fontSize: "small",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="btn-add-remove"
                >
                  <Button
                    id="reduce"
                    aria-label="reduce"
                    onClick={removeAtCart}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <div>
                    <Typography sx={{ margin: 1 }}>{count}</Typography>
                  </div>
                  <Button
                    id="increase"
                    aria-label="increase"
                    onClick={() => addToCart("error")}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              )}
            </CardActions>
          </Card>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
