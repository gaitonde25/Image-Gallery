import { Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./App.css";
import Images from "./Images";
import Search from "./Search";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=5KGmQQgRFlk00p-4mW8RK6Smtmo1MU9sNHK1ZP2Z71Q"
    )
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) return resp.json();
        else throw Error(resp.statusText);
      })
      .then((data) => {
        setImages(data);
      })
      .catch((err) => {
        throw Error(err);
      });
  }, []);

  return (
    <>
      <Stack
        sx={{ position: "relative", margin: "2% 5%" }}
        direction="row"
        spacing={5}
      >
        <Typography sx={{ fontFamily: "ui-rounded" }} variant="h3">
          Image Gallery
        </Typography>
        <div style={{ position: "absolute", right: "5%" }}>
          <Search setImages={setImages} />
        </div>
      </Stack>
      <Images data={images} />
    </>
  );
}

export default App;
