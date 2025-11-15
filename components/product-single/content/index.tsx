/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Box, Stack, Divider } from "@mui/material";
// import { useState } from "react";
// import productsColors from './../../../utils/data/products-colors';
// import productsSizes from './../../../utils/data/products-sizes';
// import CheckboxColor from './../../products-filter/form-builder/checkbox-color';
// type ProductContent = {
//   product: ProductType;
// }

const Content = ({ product }: any) => {
  // const [count, setCount] = useState<number>(1);

  return (
    <Box sx={{ height: "370px", p: 4, textAlign: "start" }}>
      <Stack direction={"row"} mb={8} justifyContent={"space-between"}>
        <Typography variant="h5">{product.text}</Typography>
        <Box>
          <Typography variant="subtitle1">₹{product.currentPrice}</Typography>
          {product.discount && <span>₹{product.price}</span>}
        </Box>
      </Stack>{" "}
      <Divider />
      <Typography variant="subtitle1">Details :</Typography>
      <br />
      <Typography variant="subtitle2">Type : {product.category}</Typography>
      <br />
      <Typography variant="subtitle2">
        Description : {product.discription}
      </Typography>
      <br />
    </Box>
  );
};

export default Content;
