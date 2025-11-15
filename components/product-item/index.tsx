/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Stack, Button, Card, Typography } from "@mui/material";
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Spinner from "../Spinner";
// import { ProductTypeList } from 'types';

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
  productType,
  admin = false,
}: any) => {
  const [viewimage, setViewImage] = useState();

  const deleteGoal = async (goalId: any) => {
    const response = await axios.delete("/api/product/" + goalId);

    return response.data;
  };

  const [base64, setBase64] = useState("");
  const [contentType, setContentType] = useState("");

  useEffect(() => {
    if (images) {
      if (images.data == false) {
        const reader: any = new FileReader();
        reader.readAsDataURL(images.file);
        reader.onloadend = () => setViewImage(reader.result);
      } else {
        const a = new Uint8Array(images.data.data);
        const b = a.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, "");
        setBase64(btoa(b));
      }
    } else {
      // useEffect(() => {
      axios({
        url: `/api/product/${id}`,
        method: "GET",
        responseType: "json",
        headers: {
          // Authorization: this.authString,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const product = await res.data;
        const a = new Uint8Array(product.img?.data?.data);
        const b = a.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, "");
        setContentType(product.img?.contentType);
        setBase64(btoa(b));
        // console.log("aaaaaaaaaaaa", base64);
      });
      // }, []);
    }
  }, []);

  // if (isLoading) return <Spinner />;

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: (theme) => theme.shape.borderRadius,
        // width: "240px",
      }}
      className="white"
    >
      <Stack
        direction={"row"}
        spacing={2}
        mb={1}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button
          variant="contained"
          sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
          type="button"
          className="fg"
        >
          Fav
        </Button>

        {admin && !viewimage && (
          <Button
            variant="contained"
            className="fg"
            onClick={() => {
              deleteGoal(id);
            }}
            sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
          >
            Delete
          </Button>
        )}

        {discount && (
          <Typography className="white" variant="caption">
            {discount}%
          </Typography>
        )}
      </Stack>
      <Link href={`/paithani/${name}?id=${id}`}>
        <img
          height={"250px"}
          width={"100%"}
          style={{ borderRadius: "16px", marginBottom: "5px" }}
          src={
            viewimage
              ? viewimage
              : contentType != "" && base64 != ""
              ? "data:" + contentType + ";base64," + base64
              : "./x.png"
          }
          alt="product"
        />
      </Link>

      <Card
        sx={{
          p: 2,
          borderRadius: (theme) => theme.shape.borderRadius,
          // height: "150px",
        }}
        className="bg"
      >
        <Typography
          variant="subtitle1"
          sx={{ textWrap: "nowrap", textOverflow: "ellipsis", width: "90%" }}
        >
          {name}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{ textWrap: "nowrap", textOverflow: "ellipsis", width: "90%" }}
        >
          Type: {productType}
        </Typography>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="subtitle1">₹{currentPrice}</Typography>

          {discount && <span>₹{price}</span>}
        </Stack>
      </Card>
    </Card>
  );
};

export default ProductItem;
