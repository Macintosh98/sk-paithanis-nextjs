/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
// type GalleryProductType = {
//   images: string[]
// }
import { Card, CircularProgress } from "@mui/material";

const Gallery = ({ images }: { images: any }) => {
  // const featImage = images[0];

  return (
    <>
      {images ? (
        <img
          height={"400px"}
          src={"data:" + images.contentType + ";base64," + images.data}
          alt="product"
        />
      ) : (
        <Card sx={{ height: "400px" }}>
          <CircularProgress></CircularProgress>
        </Card>
      )}
      {/* </div> */}
    </>
  );
};

export default Gallery;
