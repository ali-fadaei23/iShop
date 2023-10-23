import "./Profile.css";
import { Grid } from "@mui/material";
import ProfileOptions from "../profile-options/ProfileOptions";

const Profile = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        minHeight: "570px",
      }}
      container
    >
      <div className="profile-options">
        <ProfileOptions />
      </div>
    </Grid>
  );
};

export default Profile;
