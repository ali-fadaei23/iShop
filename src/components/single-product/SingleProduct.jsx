import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import {  Context } from "../../shared/context/Context";
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
import { useSnackbar } from "notistack";

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
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);
  const [error, setError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { cartItems, setCartItems, setWishlist } = useContext(Context);
  const [singleProduct, setSingleProduct] = useState({});
  const [size, setSize] = useState("");
  let { productId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const responseData = await response.json();

      setSingleProduct(responseData);
      setOpen(false);
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
  };

  const addToCart = (variant) => {
    if (!size && singleProduct.category !== "electronics") {
      enqueueSnackbar("Please select a Size!", { variant });
      setError(true);
    } else {
      setError(false);
      setCartItems((prev) => reducer(...prev, cart));
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
        setShow(false);
        state.splice(i, 1);
      } else {
        setShow(true);
        return [...prev, wishlistCard];
      }
      return state;
    });
  };

  return (
    <>
      {open ? (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
        <div className="container-card">
          <Card className="card card-product" sx={{ marginBottom: 20 }}>
            <div className="btn-wishlist">
              <IconButton onClick={addToWishlist}>
                {show ? (
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
                    sx={{ width: 200, height: 240 }}
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
                    sx={{ color: "darkblue" }}
                    component="div"
                  >
                    {singleProduct.title}
                  </Typography>
                  {singleProduct.category === "electronics" ? null : (
                    <div>
                      <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        {!error ? (
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
                            >
                              <MenuItem value="a">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"S"}>S</MenuItem>
                              <MenuItem value={"M"}>M</MenuItem>
                              <MenuItem value={"L"}>L</MenuItem>
                              <MenuItem value={"XL"}>XL</MenuItem>
                            </Select>
                          </>
                        ) : (
                          <>
                            <InputLabel
                              error
                              id="demo-simple-select-helper-label"
                            >
                              Size
                            </InputLabel>
                            <Select
                              error
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={size}
                              label="Size"
                              onChange={handleSize}
                            >
                              <MenuItem value="a">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"S"}>S</MenuItem>
                              <MenuItem value={"M"}>M</MenuItem>
                              <MenuItem value={"L"}>L</MenuItem>
                              <MenuItem value={"XL"}>XL</MenuItem>
                            </Select>
                          </>
                        )}
                      </FormControl>
                    </div>
                  )}
                </div>
              </div>

              <Typography variant="body2" color="text.secondary">
                {singleProduct.description}
              </Typography>
              <Typography
                gutterBottom
                variant="caption"
                sx={{ color: "CaptionText" }}
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
                  sx={{ color: "CaptionText" }}
                  component="div"
                >
                  {singleProduct.rating === undefined
                    ? 0
                    : singleProduct.rating["rate"]}
                </Typography>
                <Typography
                  className="rate count"
                  gutterBottom
                  sx={{ color: "CaptionText" }}
                  component="div"
                >
                  ({" "}
                  {singleProduct.rating === undefined
                    ? 0
                    : singleProduct.rating["count"]}
                  {" user "})
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Typography
                gutterBottom
                variant="h2"
                sx={{ color: "tomato" }}
                component="span"
              >
                {"$ " + singleProduct.price}
              </Typography>
              {count <= 0 ? (
                <div className="btn-product">
                  <Button
                    className="btn-add"
                    variant="contained"
                    startIcon={<AddIcon fontSize="small" />}
                    onClick={() => addToCart("error")}
                  >
                    Buy
                  </Button>
                </div>
              ) : (
                <ButtonGroup className="btn-add-remove">
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
          {/* {error ? (
            <>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
              </Alert>
            </>
          ) : null} */}
        </div>
      )}
    </>
  );
};

export default SingleProduct;
