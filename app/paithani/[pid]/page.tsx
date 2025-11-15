"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { GetServerSideProps } from "next";

// import { useState } from "react";
// import Footer from "../../components/footer";
// import Layout from "../../layouts/Main";
import ProductsFeatured from "../../../components/products-featured";
import Gallery from "../../../components/product-single/gallery";
import Content from "../../../components/product-single/content";
// import Description from "../../components/product-single/description";
// import Reviews from "../../../components/product-single/reviews";
import products1 from "../../../utils/data/products";
// import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";

// types
// import { ProductType } from 'types';

// type ProductPageType = {
//   product: ProductType;
// }

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const pid = query.id;
//   const res = await fetch(`${server}/api/product/${pid}`);
//   // const res = await fetch(`/api/product/${pid}`);
//   const product = await res.json();

//   return {
//     props: {
//       product: { ...products1[0], ...product },
//     },
//   };
// };

const Product = ({ searchParams }: any) => {
  // const [showBlock, setShowBlock] = useState("description");

  // const params = useParams();
  // const pid = params.id;
  const t: any = use(searchParams);
  const pid = t.id;

  const [product, setProduct] = useState<any>();

  // useEffect(() => {
  //   if (AllProducts.status == "idle" && AllProducts.products.length == 0) {
  //     fetch(`${server}/api/product/${pid}`).then(async (res) => {
  //       product = await res.json();
  //     });
  //   } else if (
  //     AllProducts.status == "idle" &&
  //     AllProducts.products.length > 0
  //   ) {
  //     product = AllProducts.products.filter((a: any) => {
  //       a = { ...products1[0], ...a };
  //       return a._id == pid;
  //     });
  //   }
  // }, [AllProducts]);
  useEffect(() => {
    fetch(`/api/product/${pid}`).then(async (res) => {
      const product = await res.json();

      setProduct({ ...products1[0], ...product });
    });
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {product && (
        <Card
          className="white"
          sx={{
            p: 4,
            mb: 8,
            textAlign: "center",
            // boxShadow: (theme) => theme.shadows[1],
            borderRadius: (theme) => theme.shape.borderRadius,
          }}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                className="bg"
                sx={{
                  // p: 2,
                  borderRadius: (theme) => theme.shape.borderRadius,
                }}
              >
                <Gallery images={product.img} />
              </Card>
            </Grid>{" "}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                className="bg"
                sx={{
                  p: 2,
                  borderRadius: (theme) => theme.shape.borderRadius,
                }}
              >
                <Content product={product} />
              </Card>
            </Grid>
          </Grid>{" "}
        </Card>
      )}

      <ProductsFeatured />

      {/* <Footer /> */}
    </motion.div>
  );
};

export default Product;
