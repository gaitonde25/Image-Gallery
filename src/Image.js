import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import "reactjs-popup/dist/index.css";
import { useState } from "react";

import Popup from "./Popup";

const Image = ({ props }) => {
  const [open, setOpen] = useState(false);
  const { user, likes, urls } = props;
  return (
    <>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          sx={{ height: 300 }}
          image={urls.regular}
          onClick={() => {
            setOpen(true);
          }}
        />
        <CardContent>
          <Stack sx={{ position: "relative" }} direction="row" spacing={2}>
            <Avatar
              alt={user.name}
              src={user.profile_image.medium}
              sx={{ height: "100%" }}
            />
            <Stack direction="column" spacing={0}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ marginBottom: 0 }}
              >
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                @{user.username}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ position: "absolute", right: 0 }}>
              <ThumbUpOffAltIcon />
              <p style={{ margin: 0 }}>{likes}</p>
            </Stack>
          </Stack>
        </CardContent>
        {/* <h1>{user.name}</h1>
        <h3>Total likes - {user.total_likes}</h3>
        <Popup trigger={<img src={urls.regular}></img>} position="right center">
          <div>
            <img src={urls.regular}></img>
            <h3>Popup content here !!</h3>
          </div>
        </Popup> */}
      </Card>
      <Popup open={open} setOpen={setOpen} props={props} />
    </>
  );
};
export default Image;
