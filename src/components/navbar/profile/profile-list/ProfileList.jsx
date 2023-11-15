import "./ProfileList.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../shared/auth/AuthContext";
import {
  Box,
  ListItemIcon,
  Divider,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import Logout from "@mui/icons-material/Logout";
import { ReactComponent as AvatarIcon } from "../../../../assets/img/avatar.svg";

const ProfileList = () => {
  let { userId, signOut, user, userInfo } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //  handle btn Sign Out
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div style={{ height: "100%" }}>
      {user && userInfo ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Tooltip
            title="Account settings"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
            }}
          >
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, height: "100%" }}
              id="account"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <AvatarIcon />
            </IconButton>
            <div className="userinfo">
              <label className="label-account" htmlFor="account">
                {userInfo.username}
              </label>
            </div>
          </Tooltip>
        </Box>
      ) : null}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "white",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link className="link-profile" to={`/profile/${userId}`}>
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <Link className="link-wishlist" to={`/wishlist/${userId}`}>
          <MenuItem>
            <ListItemIcon>
              <TurnedInIcon fontSize="small" />
            </ListItemIcon>
            Wishlist
          </MenuItem>
        </Link>
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileList;
