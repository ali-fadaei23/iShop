import "./Profile.css";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfileOptions from "../profile-options/ProfileOptions";

const defaultTheme = createTheme();

const Profile = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
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
    </ThemeProvider>
  );
};

export default Profile;
