import "./Wishlist.css";
import { useContext } from "react";
import { Context } from "../../shared/context/Context";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ProductItem from "../product-item/ProductItem";
import EmptyWishlist from "../../assets/img/empty-wishlist.png";

const Wishlist = () => {
  const { wishlist } = useContext(Context);
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
                    return <ProductItem key={index} product={item} />;
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
