// type GalleryProductType = {
//   images: string[]
// }
import { useEffect,useState } from 'react'


const Gallery = ({ images }:any) => {
  const [base64,setBase64]=useState("");

  useEffect(()=>{
    const a=new Uint8Array(images.data.data)
    const b = a.reduce((data, byte)=> {
      return data + String.fromCharCode(byte);
      }, '');
    setBase64(btoa(b))
  },[images])

  // const featImage = images[0];

  return (
    <section className="product-gallery">
      {/* <div className="product-gallery__thumbs">
        {images.map(image => (
          <div key={image} className="product-gallery__thumb">
            <img src={image} alt="" />
          </div>
        ))}
      </div> */}

      <div className="product-gallery__image">
        {/* <img src={featImage} alt="" /> */}
        <img src={images ? "data:"+images.contentType+";base64,"+base64 : ''} alt="product" />
      </div>
    </section>
  );
};
  
export default Gallery;
  