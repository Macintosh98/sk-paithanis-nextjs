/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
// type GalleryProductType = {
//   images: string[]
// }
import { useEffect, useState } from "react";

const Gallery = ({ images }: { images: any }) => {
  const [base64, setBase64] = useState("");

  useEffect(() => {
    const a = new Uint8Array(images.data.data);
    const b = a.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, "");
    setBase64(btoa(b));
  }, [images]);

  // const featImage = images[0];

  return (
    <>
      {images && (
        <img
          height={"400px"}
          src={"data:" + images.contentType + ";base64," + base64}
          alt="product"
        />
      )}
      {/* </div> */}
    </>
  );
};

export default Gallery;
