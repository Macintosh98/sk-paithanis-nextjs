/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductItem from "./../../product-item";
import { ProductTypeList } from "../../../types";
import products1 from "../../../utils/data/products";

// import Swiper core and required components
// import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "@mui/material";

// let slidesPerView = 1.3;
// let centeredSlides = true;
// let spaceBetween = 30;
// if (process.browser) {
//   if (window.innerWidth > 768) {
//     slidesPerView = 3;
//     spaceBetween = 35;
//     centeredSlides = false;
//   }
//   if (window.innerWidth > 1024) {
//     slidesPerView = 4;
//     spaceBetween = 65;
//     centeredSlides = false;
//   }
// }

type ProductsCarouselType = {
  products: ProductTypeList[];
};

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div>Loading</div>;

  return (
    <>
      <Grid container spacing={5}>
        {products.map((item: any) => {
          item = { ...products1[0], ...item };
          return (
            <Grid key={item._id} size={{ xs: 12, md: 3 }} sx={{ mb: 4 }}>
              <ProductItem
                id={item._id}
                name={item.text}
                price={item.price}
                color={item.color}
                discount={item.discount}
                currentPrice={item.currentPrice}
                key={item._id}
                images={item.img}
                productType={item.category}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductsCarousel;
