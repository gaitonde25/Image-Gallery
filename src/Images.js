import Image from "./Image";
import Masonry from "@mui/lab/Masonry";
const Images = ({ data }) => {
  if (data.length === 0) return <>Loading...</>;
  return (
    <>
      <Masonry sx={{ margin: "2% 5%", width: "auto" }} columns={3} spacing={2}>
        {data.map((photo) => {
          return <Image props={photo} key={photo.id} />;
        })}
      </Masonry>
    </>
  );
};

export default Images;
