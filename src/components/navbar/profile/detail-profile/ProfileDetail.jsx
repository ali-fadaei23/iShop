import "./ProfileDetail.css";
import { useAuth } from "../../../../shared/auth/AuthContext";
import { Typography, Card, CardContent } from "@mui/material";
const ProfileDetail = () => {
  let { userInfo } = useAuth();
  return (
    <>
      <div className="container-personal-info">
        <div className="bg-profile"></div>
        <Card
          sx={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            padding: "10px",
          }}
          className="card-info"
        >
          <div className="container-text-detail-info">
            <Typography sx={{ fontSize: "7rem", fontWeight: "bold" }}>
              Personal Info
            </Typography>
          </div>
          <CardContent sx={{ width: "40%" }}>
            <div>
              <Typography
                sx={{ fontSize: "1.8rem", fontWeight: "bold" }}
              >{`Detail Info`}</Typography>
            </div>
            <div className="position-detail">
              <div>
                <Typography>
                  FirstName: &nbsp; {userInfo.name.firstname}
                </Typography>
              </div>
              <div>
                <Typography>
                  LastName: &nbsp; {userInfo.name.lastname}
                </Typography>
              </div>
            </div>
            <div className="position-detail">
              <div>
                <Typography>UserName: &nbsp; {userInfo.username}</Typography>
              </div>
              <div>
                <Typography>Password: &nbsp; {userInfo.password}</Typography>
              </div>
            </div>
            <div>
              <Typography
                sx={{ fontSize: "1.8rem", fontWeight: "bold" }}
              >{`Address`}</Typography>
            </div>
            <div className="position-detail">
              <div>
                <Typography>Email: &nbsp; {userInfo.email}</Typography>
              </div>
              <div>
                <Typography>City: &nbsp; {userInfo.address.city}</Typography>
              </div>
            </div>
            <div className="position-detail">
              <div>
                <Typography>
                  Street: &nbsp; {userInfo.address.street}
                </Typography>
              </div>
              <div>
                <Typography>
                  Number: &nbsp; {userInfo.address.number}
                </Typography>
              </div>
            </div>
            <div className="position-detail">
              <div>
                <Typography>
                  ZipCode: &nbsp; {userInfo.address.zipcode}
                </Typography>
              </div>
              <div>
                <Typography>Phone: &nbsp; {userInfo.phone}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfileDetail;
