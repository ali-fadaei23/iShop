import {
  Box,
  //   List,
  //   ListItem,
  //   ListItemButton,
  ListItemIcon,
  //   ListItemText,
  Divider,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  //   Typography,
} from "@mui/material";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import PersonAdd from "@mui/icons-material/PersonAdd";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
// import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "./ProfileList.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: "steelblue" }}>
              A
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
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
        <Link className="link-profile" to={"/profile"}>
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <Link className="link-wishlist" to={"/wishlist"}>
          <MenuItem>
            <ListItemIcon>
              <TurnedInIcon fontSize="small" />
            </ListItemIcon>
            Wishlist
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileList;