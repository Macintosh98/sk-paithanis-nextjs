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
import AnimateItem from "@/components/animations/AnimateItem";
import AnimateOnScroll from "@/components/animations/AnimateOnScroll";

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
    <>
      <div className="container-feather">
        <div className="feather1">
          <div className="base-feather"></div>
          <div className="line-feather-1"></div>
          <div className="line-feather-2"></div>
          <div className="line-feather-3"></div>
          <div className="middle-feather-line"></div>
          <div className="middle-circle"></div>
          <div className="blue-circle"></div>
        </div>
        <div className="feather2">
          <div className="base-feather"></div>
          <div className="line-feather-1"></div>
          <div className="line-feather-2"></div>
          <div className="line-feather-3"></div>
          <div className="middle-feather-line"></div>
          <div className="middle-circle"></div>
          <div className="blue-circle"></div>
        </div>
        <div className="feather3">
          <div className="base-feather"></div>
          <div className="line-feather-1"></div>
          <div className="line-feather-2"></div>
          <div className="line-feather-3"></div>
          <div className="middle-feather-line"></div>
          <div className="middle-circle"></div>
          <div className="blue-circle"></div>
        </div>
        <div className="feather4">
          <div className="base-feather"></div>
          <div className="line-feather-1"></div>
          <div className="line-feather-2"></div>
          <div className="line-feather-3"></div>
          <div className="middle-feather-line"></div>
          <div className="middle-circle"></div>
          <div className="blue-circle"></div>
        </div>
        <div className="feather5">
          <div className="base-feather"></div>
          <div className="line-feather-1"></div>
          <div className="line-feather-2"></div>
          <div className="line-feather-3"></div>
          <div className="middle-feather-line"></div>
          <div className="middle-circle"></div>
          <div className="blue-circle"></div>
        </div>
      </div>{" "}
      <AnimateOnScroll>
        <AnimateItem key="init">
          <PageIntro />
        </AnimateItem>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AnimateItem key="init">
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
        </AnimateItem>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AnimateItem key="init">
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
                  sx={{
                    p: 2,
                    borderRadius: (theme) => theme.shape.borderRadius,
                  }}
                >
                  <Typography variant="h6" mb={2}>
                    Free Shipping
                  </Typography>
                  <Typography variant="subtitle2">
                    All purchases over $199 are eligible for free shipping via
                    USPS First Class Mail.
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Card
                  className="bg"
                  sx={{
                    p: 2,
                    borderRadius: (theme) => theme.shape.borderRadius,
                  }}
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
                  sx={{
                    p: 2,
                    borderRadius: (theme) => theme.shape.borderRadius,
                  }}
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
                  sx={{
                    p: 2,
                    borderRadius: (theme) => theme.shape.borderRadius,
                  }}
                >
                  <Typography variant="h6" mb={2}>
                    Finest Quality
                  </Typography>
                  <Typography variant="subtitle2">
                    Designed to last, each of our products has been crafted with
                    the finest materials.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </AnimateItem>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AnimateItem key="init">
          <ProductsFeatured />
        </AnimateItem>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AnimateItem key="init">
          <Subscribe />
        </AnimateItem>
      </AnimateOnScroll>
    </>
  );
};

export default Home;
