"use client";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "store/reducers/cart";

// import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
// import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
// import Link from "next/link";
import { motion } from "framer-motion";
import { Card, Grid, Typography } from "@mui/material";

// const content = {
//   animate: {
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const title = {
//   initial: { y: -50, opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

const Home = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageIntro />

      <Card
        className="white"
        sx={{
          p: 2,
          mb: 4,
          textAlign: "center",
          boxShadow: (theme) => theme.shadows[1],
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
      >
        {" "}
        <Typography variant="h5">Why should you choose us?</Typography>
      </Card>

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
          <Grid size={{ xs: 12, md: 3 }}>
            <Card
              className="bg"
              sx={{ p: 2, borderRadius: (theme) => theme.shape.borderRadius }}
            >
              <Typography variant="h6" mb={2}>
                Free Shipping
              </Typography>
              <Typography variant="subtitle2">
                All purchases over $199 are eligible for free shipping via USPS
                First Class Mail.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Card
              className="bg"
              sx={{ p: 2, borderRadius: (theme) => theme.shape.borderRadius }}
            >
              <Typography variant="h6" mb={2}>
                Easy Payments
              </Typography>
              <Typography variant="subtitle2">
                All payments are processed instantly over a secure payment
                protocol.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Card
              className="bg"
              sx={{ p: 2, borderRadius: (theme) => theme.shape.borderRadius }}
            >
              <Typography variant="h6" mb={2}>
                Money Guarantee
              </Typography>
              <Typography variant="subtitle2">
                If an item arrived damaged , you can send it back for a full
                refund.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Card
              className="bg"
              sx={{ p: 2, borderRadius: (theme) => theme.shape.borderRadius }}
            >
              <Typography variant="h6" mb={2}>
                Finest Quality
              </Typography>
              <Typography variant="subtitle2">
                Designed to last, each of our products has been crafted with the
                finest materials.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Card>

      <ProductsFeatured />
      <Subscribe />
    </motion.div>
  );
};

export default Home;
