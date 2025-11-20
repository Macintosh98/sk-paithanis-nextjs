/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogContent,
  IconButton,
  Modal,
  Slider,
  Typography,
  Stack,
} from "@mui/material";
import GrayHeader from "../GrayHeader";
import List from "./list";
import productsTypes from "@/utils/data/products-types";
import { useState } from "react";
import Link from "next/link";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AnimateItem from "../animations/AnimateItem";

const ProductsContent = (props: any) => {
  const [filters, setfilters] = useState(false);
  // filtersSubmit productType productPrice

  return (
    <>
      <AnimateItem key="init">
        <GrayHeader
          isOnlyStack
          sx={{
            mb: 4,
            px: 4,
            py: 1,
            boxShadow: (theme) => theme.shadows[1],
            borderRadius: (theme) => theme.shape.borderRadius,
          }}
          startElement={[
            <Typography variant="h5" key={"head"}>
              Paithani&apos;s
            </Typography>,
          ]}
          endElement={[
            <Button
              variant="contained"
              key={"b"}
              className="fg"
              sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
              onClick={() => setfilters(true)}
            >
              Filters
            </Button>,
          ]}
        ></GrayHeader>
      </AnimateItem>

      <List
        // setFiltersSubmit={props.setFiltersSubmit}
        // filtersSubmit={props.filtersSubmit}
        admin={props.admin}
        productType={props.productType}
        productPrice={props.productPrice}
      />

      <Modal
        open={filters}
        onClose={() => setfilters(false)}
        // title={"Filters"}
        // maxWidth={"md"}
      >
        <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
          <Card
            className="white"
            sx={{
              p: 4,
              my: 6,
              width: "500px",
              overflow: "auto",
              borderRadius: (theme) => theme.shape.borderRadius,
            }}
          >
            {" "}
            <GrayHeader
              isOnlyStack
              sx={{ mb: 4 }}
              startElement={[
                <Typography key="t" variant="h6" noWrap>
                  Filter Products
                </Typography>,
              ]}
              endElement={[
                <IconButton
                  key={"b"}
                  onClick={() => setfilters(false)}
                  sx={{
                    p: 0,
                  }}
                >
                  <CloseRoundedIcon />
                </IconButton>,
              ]}
            ></GrayHeader>
            <Typography variant="subtitle2">Product type</Typography> <br />
            <Card
              className="bg"
              sx={{ p: 2, borderRadius: (theme) => theme.shape.borderRadius }}
            >
              {productsTypes.map((type) => (
                <>
                  <Link
                    href={`/${props.admin ? "admin" : "paithanis"}/${
                      type.value
                    }`}
                  >
                    <Checkbox />
                    <Typography variant="button">{type.name}</Typography>
                  </Link>
                  <br />
                </>
                // <Checkbox
                //   key={type.id}
                //   name="product-type"
                //   label={type.name}
                //   value={type.value}
                //   checked={type.value === props.productType}
                //   onChange={(e: any) =>
                //     props.setProductType(e.currentTarget.value)
                //   }
                // />
              ))}
            </Card>
            <br /> <br />
            <Typography variant="subtitle2">Price</Typography>
            <br />
            <Card
              className="bg"
              sx={{ p: 2, borderRadius: (theme) => theme.shape.borderRadius }}
            >
              <Slider
                onChange={(sliderValues) => props.setProductPrice(sliderValues)}
                min={0}
                max={50000}
                value={props.productPrice}
                defaultValue={props.productPrice}
                valueLabelFormat={(value) => `Rs. ${value}`}
                // tipFormatter={(value) => `Rs. ${value}`}
              />
            </Card>
          </Card>
        </Stack>
      </Modal>
    </>
  );
};

export default ProductsContent;
