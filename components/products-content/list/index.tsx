/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import useSwr from 'swr';
import ProductItem from "../../product-item";
// import { ProductTypeList } from 'types';
import products1 from "../../../utils/data/products";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Grid } from "@mui/material";

const ProductsContent = ({
  // setFiltersSubmit,
  // filtersSubmit,
  productType,
  productPrice,
  admin,
}: any) => {
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

    setProducts(
      response.data.filter((a: any) => {
        a = { ...products1[0], ...a };
        return (
          a.currentPrice <= productPrice[1] &&
          a.currentPrice >= productPrice[0] &&
          a.category == productType
        );
      })
    );
  };
  useEffect(() => {
    onload();
  }, []);

  // useEffect(() => {
  //   if (filtersSubmit == true) {
  //     if (AllProducts.status == "idle" && AllProducts.products.length > 0) {
  //       setProducts(
  //         AllProducts.products.filter(
  //           (a: any) =>
  //             a.currentPrice < productPrice[1] &&
  //             a.currentPrice > productPrice[0] &&
  //             a.category == productType
  //         )
  //       );
  //     }
  //     setFiltersSubmit(false);
  //   }
  // }, [filtersSubmit]);

  if (Products.length == 0)
    return (
      <Card className="white" sx={{ p: 2, m: 2 }}>
        Failed to load products
      </Card>
    );

  return (
    <>
      {Products.length > 0 && (
        <Grid container spacing={5}>
          {Products.map((item: any) => {
            item = { ...products1[0], ...item };
            return (
              <Grid key={item._id} size={{ xs: 12, md: 3 }} sx={{ mb: 2 }}>
                <ProductItem
                  id={item._id}
                  name={item.text}
                  price={item.price}
                  color={item.color}
                  currentPrice={item.currentPrice}
                  images={item.img}
                  productType={item.category}
                  admin={admin}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default ProductsContent;
