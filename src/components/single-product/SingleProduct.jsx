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
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { ReactComponent as AddWishlist } from "../../assets/img/add-wishlist.svg";
import { ReactComponent as RemoveWishlist } from "../../assets/img/remove-wishlist.svg";

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
        <div className="container-loading">
          <div class="wrap">
            <div class="loading">
              <div class="bounceball"></div>
              <div class="text">NOW LOADING</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-single-product">
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
                overflow: "visible",
              }}
            >
              <CardContent
                sx={{
                  width: "100%",
                  display: " flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div className="btn-wishlist">
                  <IconButton sx={{ color: "#202020" }} onClick={addToWishlist}>
                    {showBtn ? <RemoveWishlist fill="#cc8b2b" /> : <AddWishlist />}
                  </IconButton>
                </div>
                <div className="detail-product">
                  <div className="datail-img">
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      sx={{
                        objectFit: "contain",
                        padding: "10px",
                        width: "50%",
                      }}
                      image={singleProduct.image}
                      title={singleProduct.title}
                    />
                  </div>
                  <div className="datail-text">
                    <Typography
                      gutterBottom
                      variant="caption"
                      sx={{ color: "CaptionText", fontFamily: "Raleway" }}
                      component="div"
                    >
                      {singleProduct.category}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      sx={{
                        fontSize: "x-large",
                        fontWeight: "bold",
                        color: "#202020",
                      }}
                      component="div"
                    >
                      {singleProduct.title}
                    </Typography>
                    {singleProduct.category === "electronics" ? null : (
                      <div>
                        <FormControl
                          sx={{
                            minWidth: 120,
                            marginLeft: 0,
                            marginTop: "30px",
                          }}
                        >
                          <>
                            <InputLabel
                              sx={{
                                top: "-5px",
                                fontSize: "small",
                                fontWeight: "400",
                                marginLeft: "1px",
                              }}
                              id="demo-simple-select-helper-label"
                            >
                              Size
                            </InputLabel>
                            <Select
                              sx={{ borderRadius: "30px" }}
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
                  <Typography
                    sx={{
                      fontFamily: "Raleway",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {singleProduct.description}
                  </Typography>
                </div>
                <div className="rating-container">
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      fontSize: "small",
                      color: "#202020",
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
                        color: "#202020",
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
                        color: "#202020",
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
                    color: "#282936",
                    width: "100%",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontWeight: "bold",
                    fontSize: "3rem",
                  }}
                  component="span"
                >
                  {"$ " + singleProduct.price}
                </Typography>
                {count <= 0 ? (
                  <div className="btn-product">
                    <Button
                      sx={{
                        backgroundColor: "#202020",
                        fontWeight: "900",
                        borderRadius: "30px",
                        textAlign: "center",
                        fontSize: "medium",
                        width: "max-content",
                        height: "3rem",
                        overflow: "hidden",
                        marginRight: "20px",
                      }}
                      className="btn-add"
                      variant="contained"
                      startIcon={
                        <AddShoppingCartRoundedIcon fontSize="small" />
                      }
                      onClick={() => addToCart("error")}
                    >
                      Add To Cart
                    </Button>
                  </div>
                ) : (
                  <ButtonGroup
                    sx={{
                      fontSize: "small",
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#202020",
                      padding: " 5px",
                      borderRadius: "30px",
                      height: "3rem",
                      width: "9rem",
                    }}
                    className="btn-add-remove"
                  >
                    <div className="buttons-quantity">
                      <Button
                        id="reduce"
                        aria-label="reduce"
                        onClick={removeAtCart}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <div>
                        <Typography sx={{ margin: "10px 16px", color: "#fff" }}>
                          {count}
                        </Typography>
                      </div>
                      <Button
                        id="increase"
                        aria-label="increase"
                        onClick={() => addToCart("error")}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </div>
                  </ButtonGroup>
                )}
              </CardActions>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
