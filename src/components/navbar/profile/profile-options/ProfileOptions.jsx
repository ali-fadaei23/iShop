import "./ProfileOptions.css";
import { useContext, useState } from "react";
import { Context } from "../../../../shared/context/Context";
import PropTypes from "prop-types";
import ProfileDetail from "../detail-profile/ProfileDetail";
import Wishlist from "../../../wishlist/Wishlist";
import OrderNotFound from "../../../../assets/img/empty_cart.png";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography sx={{ width: "100%" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ProfileOptions = () => {
  const { cartItems } = useContext(Context);
  const [value, setValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <Tabs
        className="tabs-profile"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChangeTab}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", height: "100%" }}
      >
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Wishlist" {...a11yProps(1)} />
        {/* <Tab label="Order" {...a11yProps(2)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProfileDetail />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Wishlist />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => {
              return (
                <div key={index} style={{ margin: "0 15px" }}>
                  <Card className="cart" sx={{ marginBottom: 20, width: 300 }}>
                    <CardMedia
                      className="img-cart"
                      component="img"
                      alt="green iguana"
                      sx={{ width: 200 }}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent className="text">
                      <Typography
                        gutterBottom
                        variant="caption"
                        sx={{ color: "darkblue" }}
                        component="div"
                      >
                        Category: {item.category}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body1"
                        sx={{ color: "darkblue" }}
                        component="div"
                      >
                        Title: {item.title}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body1"
                        sx={{ color: "darkblue" }}
                        component="div"
                      >
                        Size: {item.size}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body1"
                        sx={{ color: "darkblue" }}
                        component="div"
                      >
                        Count: {item.num}
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{ color: "tomato", marginTop: 5 }}
                        component="div"
                      >
                        Price: {item.price + " $"}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-cart">
            <img
              className="img-empty-cart"
              src={OrderNotFound}
              alt="Empty Cart"
              loading="lazy"
            />
          </div>
        )}
      </TabPanel> */}
    </Box>
  );
};

export default ProfileOptions;
