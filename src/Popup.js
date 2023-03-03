import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useRef } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  padding: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingTop: 0,
  boxShadow: 24,
  border: 0,
  p: 4,
};

const Popup = ({ open, setOpen, props }) => {
  const { user, urls, likes, links } = props;
  const popUp = useRef(null);
  const popupWidth = popUp ? 200 : popUp.current.offsetWidth;
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      sx={{ height: "80%" }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style} ref={popUp}>
        <CardMedia
          sx={{ height: 500, position: "relative", backgroundSize: "contain" }}
          image={urls.regular}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Button
            sx={{ position: "absolute", right: "1%", bottom: "1%" }}
            variant="contained"
            href={links.download}
            target="_blank"
          >
            Download
          </Button>
        </CardMedia>
        <CardContent>
          <Stack direction="row" spacing={1}>
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
                @{user.instagram_username}
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              <InstagramIcon />/{user.instagram_username}
            </Typography>
            <Typography
              sx={{ fontSize: { popupWidth } }}
              variant="body2"
              color="text.secondary"
            >
              <TwitterIcon />/{user.twitter_username}
            </Typography>
            <Stack direction="row" sx={{ position: "absolute", right: "3%" }}>
              <ThumbUpOffAltIcon />
              <p style={{ margin: 0 }}>{likes}</p>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default Popup;
