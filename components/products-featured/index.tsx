"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import ProductsCarousel from "./carousel";
// import useSwr from "swr";
// import { server } from "../../utils/server";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Button, Card, Typography, Stack } from "@mui/material";

const ProductsFeatured = () => {
  const [Products, setProducts] = useState([]);
  const onload = async () => {
    const response = await axios({
      url: `/api/product/`,
      method: "GET",
      responseType: "json",
      headers: {
        // Authorization: this.authString,
        "Content-Type": "application/json",
      },
    });

    setProducts(response.data);
  };
  useEffect(() => {
    onload();
  }, []);

  // if (AllProducts.status == "fail") return <div>Failed to load products</div>;

  return (
    <>
      <Card
        className="white"
        sx={{
          p: 2,
          mb: 4,
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" className="white">
            Paithanis under ₹1500
          </Typography>
          <Link href="/paithanis/all-paithani?minprice=0&maxprice=1500">
            <Button
              variant="contained"
              className="fg"
              sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
            >
              Show All
            </Button>
          </Link>
        </Stack>
      </Card>
      {Products.length > 0 && (
        <ProductsCarousel
          products={Products.filter((a: any) => a.currentPrice < 1500)}
        />
      )}
      <Card
        className="white"
        sx={{
          p: 2,
          mb: 4,
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" className="white">
            Our Bestsellers
          </Typography>
          <Link href="/paithanis/all-paithani?minprice=5000&maxprice=50000">
            <Button
              variant="contained"
              className="fg"
              sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
            >
              Show All
            </Button>
          </Link>
        </Stack>
      </Card>
      {Products.length > 0 && (
        <ProductsCarousel
          products={Products.filter((a: any) => a.currentPrice > 5000)}
        />
      )}{" "}
    </>
  );
};

export default ProductsFeatured;
