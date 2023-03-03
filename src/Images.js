import Image from "./Image";
import Masonry from "@mui/lab/Masonry";
import useWindowDimensions from "./useWindowDimensions";

const Images = ({ data }) => {
  const { width } = useWindowDimensions();

  if (data.length === 0) return <>Loading...</>;
  return (
    <>
      <Masonry
        sx={{ margin: "2% 5%", width: "auto" }}
        columns={width / 350}
        spacing={2}
      >
        {data.map((photo) => {
          return <Image props={photo} key={photo.id} />;
        })}
      </Masonry>
    </>
  );
};

export default Images;
