import "./Wishlist.css";
import { useContext } from "react";
import { Context } from "../../shared/context/Context";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
// import ProductItem from "../product-item/ProductItem";
import { ReactComponent as AddWishlist } from "../../assets/img/add-wishlist.svg";
import { ReactComponent as RemoveWishlist } from "../../assets/img/remove-wishlist.svg";
import EmptyWishlist from "../../assets/img/empty-wishlist.png";

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(Context);

  const removeAtWishlist = () => {
    setWishlist((prev) => {
      const state = prev.map((u) => ({ ...u }));
      const i = state.findIndex((v) => v.id === wishlist.id);
      if (state[i]?.id === wishlist.id) {
        state.splice(i, 1);
      }

      return state;
    });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "inherit",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {wishlist.length <= 0 ? (
          <div className="empty-wishlist">
            <img
              className="img-empty-wishlist"
              src={EmptyWishlist}
              alt="Empty Wishlist"
              loading="lazy"
            />
          </div>
        ) : (
          <Card
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              overflow: "auto",
              height: "480px",
              width: "100%",
              margin: "10px 20px 20px 20px",
              padding: "10px",
              overflowY: "hidden",
            }}
            className="card-wishlist"
          >
            <CardContent
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <>
                <div>
                  <Typography sx={{ fontSize: "1.8rem", fontWeight: " bold" }}>
                    Total Wishlist: {wishlist.length}
                  </Typography>
                </div>
                <div className="wishlist-items">
                  {wishlist.map((item, index) => {
                    return (
                      <>
                        <Card
                          className="card card-product"
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            margin: "10px",
                            marginBottom: "40px",
                            width: 300,
                            height: "auto",
                          }}
                        >
                          <Link
                            className="link-products"
                            to={`/products/${item.id}`}
                          >
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              sx={{
                                width: "50%",
                                height: "160px",
                                objectFit: "contain",
                                marginTop: "10px",
                              }}
                              image={item.image}
                              title={item.title}
                            />
                            <CardContent
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                textAlign: "left",
                                justifyContent: "center",
                                width: "100%",
                                margin: 0,
                              }}
                              className="text content"
                            >
                              <Typography
                                gutterBottom
                                variant="caption"
                                sx={{
                                  color: "CaptionText",
                                  fontFamily: "Raleway",
                                }}
                                component="div"
                              >
                                {item.category}
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="body1"
                                sx={{ color: "#202020", fontSize: "1rem" }}
                                component="div"
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="caption"
                                sx={{
                                  color: "#fff",
                                  backgroundColor: "#cc8b2b",
                                  padding: " 2px 7px",
                                  borderRadius: "35px",
                                  fontSize: "0.85rem",
                                }}
                                component="div"
                              >
                                {"$ " + item.price}
                              </Typography>
                            </CardContent>
                          </Link>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              width: "100%",
                              margin: "5px 0 0 5px",
                            }}
                          >
                            <button
                              onClick={removeAtWishlist}
                              class="learn-more-wishlist"
                            >
                              <span class="circle" aria-hidden="true">
                                {item.added === true ? (
                                  <AddWishlist />
                                ) : (
                                  <RemoveWishlist fill="#cc8b2b" />
                                )}
                              </span>
                            </button>
                          </div>
                        </Card>
                      </>
                    );
                  })}
                </div>
              </>
            </CardContent>
          </Card>
        )}
      </Box>
    </>
  );
};

export default Wishlist;
